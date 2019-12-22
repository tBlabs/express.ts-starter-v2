import { injectable } from "inversify";

@injectable()
export class SampleService
{
    public DoubleValue(value: number)
    {
        return value * value;
    }
}