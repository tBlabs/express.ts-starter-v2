export interface ICommandHandler<Q>
{
    Handle(query: Q): Promise<void>;
}
