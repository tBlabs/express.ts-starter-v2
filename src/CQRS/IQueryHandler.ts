export interface IQueryHandler<Q, R>
{
    Handle(query: Q): Promise<R>;
}
