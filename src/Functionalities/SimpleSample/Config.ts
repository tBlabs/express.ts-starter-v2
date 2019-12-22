import { Container } from 'inversify';
import { MessageBus } from './../../CQRS/MessageBus';
import { SampleQuery } from './Queries/SampleQuery';
import { SampleQueryHandler } from './QueryHandlers/SampleQueryHandler';
import { SampleService } from './Services/SampleService';

export class SimpleSampleFunctionalityConfig
{
    public static MessageBusConfig(messageBus: MessageBus): void
    {
        messageBus.Register(SampleQuery, SampleQueryHandler);
    }

    public static ServicesConfig(container: Container): void
    {
        container.bind(SampleService).toSelf().inTransientScope();
    }
}