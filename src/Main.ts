import { IRunMode } from './services/runMode/IRunMode';
import { ILogger } from './services/logger/ILogger';
import { injectable, inject } from 'inversify';
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
        this._log.Info('Main.Run', 'Starting in "' + this._runMode.Current + '" mode with args:', this._args.Args); // Don't Try it with "npm run run --foo bar" or "npm run run -- --foo bar", it won't work! Call script directly: "tsc || /bin/startup.js --foo bar"
      
        /* Put your code here */
        /* And then run `npm run serve` */
        /* Don't forget to set your enviroment variables (`.env` file) */
    }
}
