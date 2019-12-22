import 'reflect-metadata';
import { ServiceDependency } from "./ServiceDependency";
import { RequestScopeService } from "./RequestScopeService";
import { injectable } from "inversify";

@injectable()
export class Service
{
    constructor(
        public _dep: ServiceDependency,
        public _dep2: RequestScopeService)
    {
        
    }
}