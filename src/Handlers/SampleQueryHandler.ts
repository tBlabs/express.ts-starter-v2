import { injectable } from 'inversify';
import { IQueryHandler } from '../CQRS/IQueryHandler';
import { SampleQuery } from './SampleQuery';

export class SampleQueryResult
{
    constructor(public Bar: number = 0)
    { }
}

@injectable()
export class SampleQueryHandler implements IQueryHandler<SampleQuery, SampleQueryResult>
{
    public async Handle(query: SampleQuery): Promise<SampleQueryResult>
    {
        return new SampleQueryResult(+query.Foo);
    }
}