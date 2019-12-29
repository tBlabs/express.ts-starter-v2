import 'reflect-metadata';
import { injectable } from 'inversify';
import * as express from 'express';
import * as http from 'http';
import * as socketIo from 'socket.io';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { HostConfig } from './HostConfig';

// TODO: add typing here
@injectable()
export class Host
{
    private server;

    constructor(private _config: HostConfig)
    {
        this.server = express();
        const httpServer = http.createServer(this.server);
        // const socket = socketIo(httpServer);

        this.server.use(cors({ exposedHeaders: 'Content-Length' }));
        this.server.use(bodyParser.json());

        this.server.get('/favicon.ico', (req, res) => res.status(204));
        this.server.get('/ping', (req, res) => res.send('pong'));

        httpServer.listen(_config.Port, () => console.log('SERVER STARTED @ ' + _config.Port));
     
        process.on('SIGINT', () =>
        {
            httpServer.close(() => console.log('SERVER CLOSED'));
        });
    }

    public OnPost(url: string, callback: (req: any, res: any) => Promise<void>): void
    {
        this.server.post(url, callback);
    }
}
