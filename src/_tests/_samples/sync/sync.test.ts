import { SumAndStringify } from './sync';

test('1+2 as string = "3"', () =>
{
    const output = SumAndStringify(1, 2);
    
    expect(output).toBe('3');
});

