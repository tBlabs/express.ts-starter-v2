// These two imports must go first!
import 'reflect-metadata';
import { Types } from './Types';
import { Container } from 'inversify';
import { Main } from '../Main';

const IoC = new Container();

try
{
    IoC.bind<Main>(Main).toSelf().inSingletonScope().whenTargetIsDefault();
}
catch (ex)
{
    console.log('IoC exception:', ex);
}

export { IoC };
