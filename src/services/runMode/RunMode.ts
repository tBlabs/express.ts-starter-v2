import { IRunMode } from './IRunMode';
import { Environment } from '../environment/Environment';
import { injectable, inject } from 'inversify';
import { Types } from './../../IoC/Types';
import { IEnvironment } from './../../services/environment/IEnvironment';

@injectable()
export class RunMode implements IRunMode
{
    private MODE_KEY: string = 'MODE';

    constructor(@inject(Types.IEnvironment) private _env: IEnvironment)
    { }

    public get Current(): string
    {
        return this._env.ValueOrDefault(this.MODE_KEY, 'unset');
    }

    public get IsDev(): boolean
    {
        return (this._env.ValueOf(this.MODE_KEY) === 'dev');
    }

    public get IsProd(): boolean
    {
        return (this._env.ValueOf(this.MODE_KEY) === 'prod');
    }
}
