import { inject, injectable } from "inversify";
import { Types } from "./IoC/Types";

export interface IHttp
{
    Get(url: string): number;
}

@injectable()
export class Http implements IHttp
{
    Get(url: string): number
    {
        // axios.get....
        return 5;
    }
}

export interface IConverter
{
    ToCelcius(value: number): number;
}

@injectable()
export class Converter implements IConverter
{
    ToCelcius(value: number): number
    {
        return value + 100;
    }
}

@injectable()
export class TemperatureSensor
{
    constructor(
        @inject(Types.IHttp) private _http: IHttp, 
        @inject(Types.IConverter) private _converter: IConverter)
    { }

    public Read(): number
    {
        const temp: number = this._http.Get('http://123.123.123.123:1234/read');

        return this.ConvertToCelcius(temp);
    }

    private ConvertToCelcius(temp: number): number
    {
        return this._converter.ToCelcius(temp);
    }
}