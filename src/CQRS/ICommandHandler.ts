export interface ICommandHandler<C>
{
    Handle(command: C): Promise<void>;
}
