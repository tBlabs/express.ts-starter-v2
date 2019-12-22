import { SampleService } from './../Services/SampleService';
import { injectable } from 'inversify';
import { IQueryHandler } from '../../../CQRS/IQueryHandler';
import { SampleQuery } from '../Queries/SampleQuery';
import { SampleQueryResult } from '../DTOs/SampleQueryResult';

@injectable()
export class SampleQueryHandler implements IQueryHandler<SampleQuery, SampleQueryResult>
{
    constructor(private _sampleService: SampleService)
    { }

    public async Handle(query: SampleQuery): Promise<SampleQueryResult>
    {
        return new SampleQueryResult(this._sampleService.DoubleValue(+query.Foo));
    }
}