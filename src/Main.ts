import 'reflect-metadata';
import { injectable } from 'inversify';
import { MessageBus } from './CQRS/MessageBus';
import { Host } from './Services/Host';
import { SimpleSampleFunctionalityConfig } from './Functionalities/SimpleSample/Config';
import { AdvancedSampleFunctionalityConfig } from './Functionalities/AdvancedSample/Config';

@injectable()
export class Main
{
    constructor(
        private _host: Host,
        private _messageBus: MessageBus)
    { }

    private ConfigureMessageBus()
    {
        SimpleSampleFunctionalityConfig.MessageBusConfig(this._messageBus);
        AdvancedSampleFunctionalityConfig.MessageBusConfig(this._messageBus);
    }

    public async Start(): Promise<void>
    {
        this.ConfigureMessageBus();

        this._host.OnPost('/MessageBus', async (req, res) =>
        {
            const result = await this._messageBus.Execute(req.body);

            res.send(result);
        });
    }
}
