import { ICommand } from "./ICommand";
import { IQueryBase } from "./IQueryBase";

export interface IMessage 
{
    [messageName: string]: ICommand | IQueryBase;
}
