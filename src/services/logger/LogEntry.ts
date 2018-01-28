import { LogType } from './LogType';

export class LogEntry
{
    type: LogType;
    path: string;
    args: any[];
    message: string;
    time: Date;
}
