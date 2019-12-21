#!/usr/bin/env node

import * as dotenv from 'dotenv';
dotenv.config(); // Loads variables from '.env' file to process.env

import { Main } from './Main';
import { Container } from 'inversify';
import { Types } from './IoC/Types';
import { Startup } from './Startup';

(async () =>
{
    try
    {
        const container = new Container();
        container.bind(Types.Container).toConstantValue(container);
        container.bind(Main).toSelf().inSingletonScope().whenTargetIsDefault();

        const startup = new Startup();
        startup.ConfigureServices(container);

        const main: Main = container.get(Main);
        await main.Start();
    }
    catch (ex)
    {
        console.log('Startup exception:', ex);
    }
})();
