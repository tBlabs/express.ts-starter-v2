import { IoC } from "./IoC/IoC";
import { MessageBus } from "./MessageBus";
import { SampleQuery, SampleQueryHandler } from "./Handlers/SampleHandler";

const messageBus = IoC.get(MessageBus);

messageBus.Register(SampleQuery, SampleQueryHandler);
