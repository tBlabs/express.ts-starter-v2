import 'reflect-metadata';
import { Service } from "../src/Functionalities/AdvancedSample/Services/Service";
import { TestEnv } from './TestEnv';

test('Advanced example. Request scope test.', () =>
{
    const testEnv = new TestEnv();

    const service: Service = testEnv.Get(Service) as Service;

    const depId = service._dep2.Id;
    const depOfDepId = service._dep._dep.Id;

    expect(depId).toBe(depOfDepId);
});