import { LogType } from './LogType';
import { LogEntry } from './LogEntry';

export class LoggerConfig
{
    // public enabled: boolean;
    // public minimumLevel: LogType;
    public output: (entry: LogEntry) => void;
}
