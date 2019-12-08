import { ICommand, IQueryBase } from './Handlers/SampleHandler';
export interface IMessage //xtends ICommand, IQueryBase
{
    [key: string]: ICommand | IQueryBase;
}
