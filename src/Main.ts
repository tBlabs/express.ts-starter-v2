import { IRunMode } from './services/runMode/IRunMode';
import { RunMode } from './services/runMode/RunMode';
import { IEnvironment } from './services/environment/IEnvironment';
import { ILogger } from './services/logger/ILogger';
import { Logger } from './services/logger/Logger';
import { injectable, inject } from 'inversify';
import { Environment } from './services/environment/Environment';
import { Types } from './IoC/Types';
import { IStartupArgs } from './services/environment/IStartupArgs';

@injectable()
export class Main
{
    constructor(
        @inject(Types.IStartupArgs) private _args: IStartupArgs,
        @inject(Types.ILogger) private _log: ILogger,
        @inject(Types.IRunMode) private _runMode: IRunMode)
    { }

    public async Run(): Promise<void>
    {
        this._log.Info('Main.Run', 'Starting in "' + this._runMode.Current + '" mode with args:', this._args.Args); // Try it with "npm run run --foo bar"

        /* Put your code here */
        /* And then run `npm run serve` */
        /* Don't forget to create `.env` file */
    }
}
