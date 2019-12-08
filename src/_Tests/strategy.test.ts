import { YoungPeopleRepo, OldPeopleRepo } from './YoungPeopleRepo';
import { IsYoungStrategy, IsOldStrategy } from "./IsYoungStrategy";
import { IStrategy } from "./IStrategy";
import { Human } from "./Human";
import { IoC } from '../IoC/IoC';

test('strategy', () =>
{
    const young: Human[] = [];
    const old: Human[] = [];

    const human: Human = new Human("Human1", 15);

    if (human.age <= 18) young.push(human);
    else
        if (human.age > 18) old.push(human);
});

// const young: Human[] = [];
// const old: Human[] = [];

test('strategy 2', () =>
{
    const human: Human = new Human("Human1", 15);
    const youngRepo = new YoungPeopleRepo();
    const strategies = [
        new IsYoungStrategy(youngRepo), 
        new IsOldStrategy(new OldPeopleRepo())
    ];

    const strategy: IStrategy | undefined = strategies.find(strategy => strategy.IsApplicable(human));
    if (strategy === undefined) throw Error("");
    strategy.Execute(human);

    expect(youngRepo.Count).toBe(1);
});







