import { injectable } from 'inversify';
import 'reflect-metadata';
import { ISample } from './ISample';

@injectable()
export class SampleService implements ISample
{
    public SampleMethod(foo: number): number
    {
        return foo * foo;
    }
}
