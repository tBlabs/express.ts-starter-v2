import { injectable, inject } from 'inversify';
import { Types } from './IoC/Types';
import * as express from 'express';
import * as http from 'http';
import * as socketIo from 'socket.io';
import * as path from 'path';
import { IStartupArgs } from './Services/Environment/IStartupArgs';
import { Repeater } from './Services/Repeater/Repeater';
import { IEnvironment } from './Services/Environment/IEnvironment';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

@injectable()
export class Main
{
    constructor(
        @inject(Types.IStartupArgs) private _args: IStartupArgs,
        @inject(Types.IEnvironment) private _env: IEnvironment)
    { }

    private get ClientDir(): string
    {
        const s = __dirname.split(path.sep); // __dirname returns '/home/tb/projects/EventsManager/bin'. We don't wanna 'bin'...
        return s.slice(0, s.length - 1).join(path.sep) + '/client';
    }

    public async Start(): Promise<void>
    {
        const server = express();
        const httpServer = http.createServer(server);
        const socket = socketIo(httpServer);
        server.use(cors({ exposedHeaders: 'Content-Length' }));
        server.use(bodyParser.json());

        server.get('/favicon.ico', (req, res) => res.status(204));

        server.get('/ping', (req, res) => res.send('pong'));

        server.use(express.static(this.ClientDir));

        socket.on('connection', (socket: socketIo.Socket) =>
        {
            console.log('CLIENT CONNECTED', socket.id);

            Repeater.EverySecond((counter) =>
            {
                socket.emit('data', { counter: counter });
            });
        });

        const port = this._env.ValueOrDefault('PORT', '4000');
        httpServer.listen(port, () => console.log('SERVER STARTED @ ' + port));

        process.on('SIGINT', () =>
        {
            httpServer.close(() => console.log('SERVER CLOSED'));
        });
    }
}
