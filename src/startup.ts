import 'reflect-metadata';
import { Host } from "./Services/Host";
import { Container } from 'inversify';
import { MessageBus } from './CQRS/MessageBus';

export class Startup
{
    public ConfigureServices(services: Container): void
    {
        services.bind(MessageBus).toSelf().inSingletonScope();
        services.bind(Host).toSelf().inSingletonScope();
    }
}
