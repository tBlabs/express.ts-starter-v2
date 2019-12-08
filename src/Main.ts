import 'reflect-metadata';
import { YoungPeopleRepo } from './_Tests/YoungPeopleRepo';
import { injectable, multiInject } from 'inversify';
import { TemperatureSensor, Http, Converter } from './TemperatureSensor';
import { IStrategy } from './_Tests/IStrategy';
import { Human } from './_Tests/Human';
import { Types } from './IoC/Types';

@injectable()
export class Main
{
    constructor(
        private _tempSensor: TemperatureSensor,
        @multiInject(Types.IStrategy) private _strategies: IStrategy[],
        private _repo: YoungPeopleRepo)
    { }

    public async Start(): Promise<void>
    {
        console.log('start');

        const temp = this._tempSensor.Read();
        console.log(temp);

        const human: Human = new Human("Human1", 15);

        const strategy: IStrategy | undefined = this._strategies.find(strategy => strategy.IsApplicable(human));
        if (strategy === undefined) throw Error("");
        strategy.Execute(human);
    
        console.log('Young:', this._repo.Count);
    }
}
