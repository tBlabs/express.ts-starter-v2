import { Human } from "./Human";
import { injectable } from "inversify";

@injectable()
export class YoungPeopleRepo
{
    private folks: Human[] = [];

    public get Count()
    {
        return this.folks.length;
    }

    public Add(human: Human)
    {
        this.folks.push(human);
    }
}

@injectable()
export class OldPeopleRepo
{
    private folks: Human[] = [];
    public Add(human: Human)
    {
        this.folks.push(human);
    }
}
