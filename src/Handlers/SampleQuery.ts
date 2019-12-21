import { IQuery } from '../CQRS/IQuery';
import { SampleQueryResult } from './SampleQueryHandler';

export class SampleQuery implements IQuery<SampleQueryResult> 
{
    constructor(public Foo: string = "") 
    { }
}
