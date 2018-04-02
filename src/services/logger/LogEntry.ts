import { LogType } from './LogType';

export class LogEntry
{
    public type: LogType;
    public path: string;
    public args: any[];
    public message: string;
    public time: Date;
}
