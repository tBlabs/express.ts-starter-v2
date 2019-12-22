import { injectable } from "inversify";

@injectable()
export class HostConfig
{
    public get Port()
    {
        return process.env.PORT;
    }
}