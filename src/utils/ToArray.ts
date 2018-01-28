export function ToArray<T>(x: T | T[]): T[]
{
    if (Array.isArray(x))
    {
        return x;
    }

    return [x];
}
