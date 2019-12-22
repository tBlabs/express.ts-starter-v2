import { Container } from 'inversify';
import { Startup } from "../src/Startup";
export class TestEnv
{
    private container: Container = new Container();
    constructor()
    {
        const app = new Startup();
        app.ConfigureServices(this.container);
    }
    public Get(service)
    {
        return this.container.get(service);
    }
}
