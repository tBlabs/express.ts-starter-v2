import { ServiceDependency } from './Services/ServiceDependency';
import { MessageBus } from './../../CQRS/MessageBus';
import { Container } from 'inversify';
import { Service } from './Services/Service';
import { RequestScopeService } from './Services/RequestScopeService';

export class AdvancedSampleFunctionalityConfig
{
    public static MessageBusConfig(messageBus: MessageBus): void
    {

    }

    public static ServicesConfig(container: Container): void
    {
        container.bind(Service).toSelf().inTransientScope();
        container.bind(ServiceDependency).toSelf().inTransientScope();
        container.bind(RequestScopeService).toSelf().inRequestScope();
    }
}