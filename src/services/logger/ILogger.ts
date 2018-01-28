import { LoggerConfig } from './LoggerConfig';

export interface ILogger
{
    Config(config: Partial<LoggerConfig>);
    Info(source: string, ...args): void;
    Warn(source: string, ...args): void;
    Ex(source: string, ...args): void;
}
