import { IoC } from './IoC/IoC';
import { IMessage } from "./IMessage";
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class MessageBus
{
    public Register(message, handler)
    {
        IoC.bind(message.name).to(handler);
    }
    
    public async Execute<T>(message: IMessage): Promise<T>
    {
        const messageName = Object.keys(message)[0];
        const messageBody = message[messageName];
        if (!IoC.isBound(messageName))
        {
            throw new Error(`Can not find ${messageName}`);
        }

        const handler: any = IoC.get(messageName);
        return handler.Handle(messageBody);
    }
}
