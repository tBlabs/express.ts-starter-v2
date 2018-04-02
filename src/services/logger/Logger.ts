import { LogEntry } from './LogEntry';
import { LogType } from './LogType';
import { LoggerConfig } from './LoggerConfig';
import { ILogger } from './ILogger';
import { injectable } from 'inversify';

@injectable()
export class Logger implements ILogger
{
    private config: LoggerConfig = new LoggerConfig();

    constructor()
    {
        this.config.output = (entry: LogEntry) => console.log(entry.message);
    }

    public Config(config: LoggerConfig)
    {
        this.config = config;
    }

    private TimeMark(time: Date): string
    {
        return (time.toLocaleTimeString());
    }

    private ObjectToString(obj: any): string
    {
        if (obj === undefined)
        {
            return 'undefined';
        }
        else
            if (obj === null)
            {
                return 'null';
            }
            else
                if (obj instanceof Object)
                {
                    return JSON.stringify(obj)
                }
                else
                {
                    return obj;
                }
    }

    private ArgsToString(args: any[]): string
    {
        return args.map(i => this.ObjectToString(i)).join(' ');
    }

    private Message(type: LogType, path: string, time: Date, args: any[]): string
    {
        return `[${ type } in ${ path }] ${ this.ArgsToString(args) } @ ${ this.TimeMark(time) }`;
    }

    private BuildEntry(type: LogType, path: string, ...args): LogEntry
    {
        const entry: LogEntry = new LogEntry();

        entry.type = type;
        entry.path = path;
        entry.args = args;
        entry.time = new Date();
        entry.message = this.Message(type, path, entry.time, args);

        return entry;
    }

    private SendEntry(entry: LogEntry): void
    {
        if ((this.config !== undefined) && this.config.output)
        {
            this.config.output(entry);
        }
        else 
        {
            console.log('[' + Logger.name + '] No log output specified');
        }
    }

    private BuildEntryAndSend(type: LogType, path: string, ...args): void
    {
        const entry: LogEntry = this.BuildEntry(type, path, ...args);

        this.SendEntry(entry);
    }

    public Info(path: string, ...args: any[]): void
    {
        this.BuildEntryAndSend(LogType.Info, path, ...args);
    }

    public Warn(path: string, ...args: any[]): void
    {
        this.BuildEntryAndSend(LogType.Warning, path, ...args);
    }

    public Ex(path: string, ...args: any[]): void
    {
        this.BuildEntryAndSend(LogType.Exception, path, ...args);
    }
}
