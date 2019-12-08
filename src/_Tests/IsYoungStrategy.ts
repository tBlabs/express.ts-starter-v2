import { Human } from "./Human";
import { IStrategy } from "./IStrategy";
import { YoungPeopleRepo, OldPeopleRepo } from "./YoungPeopleRepo";
import { injectable } from "inversify";

@injectable()
export class IsYoungStrategy implements IStrategy
{
    constructor(private _youngPeopleRepo: YoungPeopleRepo) { }
 
    IsApplicable(human: Human): boolean
    {
        return human.age <= 18;
    }

    Execute(human: Human): void
    {
        this._youngPeopleRepo.Add(human);
    }
}

@injectable()
export class IsOldStrategy implements IStrategy
{
    constructor(private _repo: OldPeopleRepo) { }

    IsApplicable(human: Human): boolean
    {
        return human.age > 18;
    }

    Execute(human: Human): void
    {
        this._repo.Add(human);
    }
}
