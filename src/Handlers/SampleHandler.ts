import { injectable } from 'inversify';
import { TemperatureSensor } from './../TemperatureSensor';

export interface IQueryBase
{ }

export interface IQuery<T> extends IQueryBase
{ }

export interface IQueryHandler<Q, R>
{
    Handle(query: Q): Promise<R>;
}

export interface ICommand
{ }

export interface ICommandHandler<Q>
{
    Handle(query: Q): Promise<void>;
}


export class SampleQuery implements IQuery<SampleQueryResult>
{
    constructor(public Foo: string = "")
    { }
}

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