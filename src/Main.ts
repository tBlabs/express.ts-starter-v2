import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export class Main
{
    public async Start(): Promise<void>
    {
        console.log('start');
    }
}
