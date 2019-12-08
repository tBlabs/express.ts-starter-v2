#!/usr/bin/env node

import * as dotenv from 'dotenv';
dotenv.config(); // Loads variables from '.env' file to process.env

import { Main } from './Main';
import { IoC } from './IoC/IoC';


(async () =>
{
    try
    {
        const main: Main = IoC.get(Main);
        await main.Start();
    }
    catch (ex)
    {
        console.log('Startup exception:', ex);
    }
})();
