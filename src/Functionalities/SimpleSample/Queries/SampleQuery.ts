import { IQuery } from '../../../CQRS/IQuery';
import { SampleQueryResult } from "../DTOs/SampleQueryResult";

export class SampleQuery implements IQuery<SampleQueryResult> 
{
    constructor(public Foo: string = "") 
    { }
}
