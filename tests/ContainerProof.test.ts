import 'reflect-metadata';
import { Container, injectable } from "inversify";
import * as guid from 'uuid';

@injectable()
class Singleton
{
    public guid = guid.v4();
}

@injectable()
class Transient
{
    public guid = guid.v4();
}

@injectable()
class Request
{
    public guid = guid.v4();
}

@injectable()
class Dependency
{
    constructor(public _singleton: Singleton,
        public _transient: Transient,
        public _request: Request)
    { }
}

@injectable()
class Resolver
{
    constructor(public _singleton: Singleton,
        public _transient: Transient,
        public _request: Request,
        public _dependency: Dependency)
    { }
}

test('inversify', () =>
{
    const container = new Container();

    container.bind(Singleton).toSelf().inSingletonScope();
    container.bind(Transient).toSelf().inTransientScope();
    container.bind(Request).toSelf().inRequestScope(); // Works like TransientScope when we use container.get
    container.bind(Resolver).toSelf().inTransientScope();
    container.bind(Dependency).toSelf().inTransientScope();

    const singleton = container.get(Singleton);
    const singletonGuid = singleton.guid;
    const singleton2 = container.get(Singleton);
    const singleton2Guid = singleton2.guid;

    expect(singletonGuid).toBe(singleton2Guid);

    
    const transient = container.get(Transient);
    const transientGuid = transient.guid;
    const transient2 = container.get(Transient);
    const transient2Guid = transient2.guid;

    expect(transientGuid).not.toBe(transient2Guid);


    const request = container.get(Request);
    const requestGuid = request.guid;
    const request2 = container.get(Request);
    const request2Guid = request2.guid;

    expect(requestGuid).not.toBe(request2Guid); // NOT EQUAL


    const resolver = container.get(Resolver);
    expect(resolver._singleton.guid).toBe(resolver._dependency._singleton.guid);
    expect(resolver._transient.guid).not.toBe(resolver._dependency._transient.guid);
    expect(resolver._request.guid).toBe(resolver._dependency._request.guid); // EQUAL (this is good ;)
});