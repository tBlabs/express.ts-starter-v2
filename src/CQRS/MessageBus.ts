import 'reflect-metadata';
import { Types } from '../IoC/Types';
import { IMessage } from "./IMessage";
import { injectable, Container, inject } from 'inversify';

@injectable()
export class MessageBus
{
    constructor(@inject(Types.Container) private _container: Container)
    { }

    public Register(message, handler): void
    {
        this._container.bind(message.name).to(handler);
    }
    
    public async Execute<T>(message: IMessage): Promise<T>
    {
        const messageName = Object.keys(message)[0];
        const messageBody = message[messageName];
        if (!this._container.isBound(messageName))
        {
            throw new Error(`Can not find ${messageName}`);
        }

        const handler: any = this._container.get(messageName);
        return handler.Handle(messageBody);
    }
}
