import 'reflect-metadata';
import { Container } from 'inversify';
import { Host } from "./Services/Host";
import { HostConfig } from './Services/HostConfig';
import { MessageBus } from './CQRS/MessageBus';
import { SimpleSampleFunctionalityConfig } from './Functionalities/SimpleSample/Config';
import { AdvancedSampleFunctionalityConfig } from './Functionalities/AdvancedSample/Config';

export class Startup
{
    public ConfigureServices(services: Container): void
    {
        services.bind(MessageBus).toSelf().inSingletonScope();
        services.bind(Host).toSelf().inSingletonScope();
        services.bind(HostConfig).toSelf().inSingletonScope();

        SimpleSampleFunctionalityConfig.ServicesConfig(services);
        AdvancedSampleFunctionalityConfig.ServicesConfig(services);
    }
}
