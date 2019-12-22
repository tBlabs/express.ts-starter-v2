import 'reflect-metadata';
import { RequestScopeService } from "./RequestScopeService";
import { injectable } from "inversify";

@injectable()
export class ServiceDependency
{
    constructor(public _dep: RequestScopeService)
    { }
}