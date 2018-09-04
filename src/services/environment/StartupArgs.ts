import { injectable } from 'inversify';
import 'reflect-metadata';
import { IStartupArgs } from './IStartupArgs';

@injectable()
export class StartupArgs implements IStartupArgs
{
    public get Args(): string[]
    {
        return process.argv.slice(2);
    }
}