import 'reflect-metadata';
import { injectable } from 'inversify';
import { SampleQueryHandler } from './Handlers/SampleQueryHandler';
import { SampleQuery } from "./Handlers/SampleQuery";
import { MessageBus } from './CQRS/MessageBus';
import { Host } from './Services/Host';

@injectable()
export class Main
{
    constructor(
        private _host: Host,
        private _messageBus: MessageBus)
    { }

    private ConfigureMessageBus()
    {
        this._messageBus.Register(SampleQuery, SampleQueryHandler);
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
