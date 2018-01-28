import { IRunMode } from './services/runMode/IRunMode';
import { RunMode } from './services/runMode/RunMode';
import { IEnvironment } from './services/environment/IEnvironment';
import { ILogger } from './services/logger/ILogger';
import { Logger } from './services/logger/Logger';
import { injectable, inject } from 'inversify';
import { Environment } from './services/environment/Environment';
import { Types } from './IoC/Types';

@injectable()
export class Main
{
    constructor(
        @inject(Types.ILogger) private _log: ILogger,
        @inject(Types.IEnvironment) private _env: IEnvironment)
    { }

    public async Run(): Promise<void>
    {
        this._log.Info('Main.Run', 'Starting in "' + this._env.ValueOf('MODE') + '" mode');

        /* Put your code here */
    }
}
