import { MessageBus } from './../MessageBus';
import { OldPeopleRepo, YoungPeopleRepo } from './../_Tests/YoungPeopleRepo';
import 'reflect-metadata';
import { TemperatureSensor, Http, IHttp, IConverter, Converter } from './../TemperatureSensor';
import { Types } from './Types';
import { Container } from 'inversify';
import { Main } from '../Main';
import { IStrategy } from '../_Tests/IStrategy';
import { IsYoungStrategy, IsOldStrategy } from '../_Tests/IsYoungStrategy';
import { SampleQueryHandler } from '../Handlers/SampleHandler';

const IoC = new Container();

try
{
    IoC.bind(Main).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind(TemperatureSensor).toSelf().inTransientScope();
    IoC.bind<IHttp>(Types.IHttp).to(Http).inTransientScope();
    IoC.bind<IConverter>(Types.IConverter).to(Converter).inTransientScope();
    
    IoC.bind<IStrategy>(Types.IStrategy).to(IsYoungStrategy).inTransientScope();
    IoC.bind<IStrategy>(Types.IStrategy).to(IsOldStrategy).inTransientScope();
    IoC.bind(OldPeopleRepo).toSelf().inSingletonScope();
    IoC.bind(YoungPeopleRepo).toSelf().inSingletonScope();

    IoC.bind(MessageBus).toSelf();
}
catch (ex)
{
    console.log('IoC exception:', ex);
}

export { IoC };
 