import 'reflect-metadata';
import * as Guid from "uuid";
import { injectable } from "inversify";

@injectable()
export class RequestScopeService
{
    public Id = Guid.v4();
}