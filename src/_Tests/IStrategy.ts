import { Human } from "./Human";
export interface IStrategy
{
    IsApplicable(human: Human): boolean;
    Execute(human: Human): void;
}
