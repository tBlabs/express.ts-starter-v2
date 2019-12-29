import { injectable } from "inversify";

@injectable()
export class HostConfig
{
    public get Port(): string | undefined
    {
        return process.env.PORT;
    }
}