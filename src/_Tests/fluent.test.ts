enum Command
{
    Read,
    Write
}

class FrameBuilder
{
    private frame: number[] = [];
    public StartFrame(): this
    {
        this.frame = [];
        this.frame.push(0xAB);

        return this;
    }

    public AddCommand(command: Command): this
    {
        switch (command)
        {
            case Command.Read: this.frame.push(0x01);
        }

        return this;
    }

    Xor(): this
    {
        // tu powinna być logika liczenia sumy kontrolnej
        this.frame.push(0xF2);

        return this;
    }

    Build(): number[]
    {
        return this.frame;
    }
}

test('fluent builder', () => {
    
    const builder = new FrameBuilder();

    // device.Send([0x01, 0xAB, 32, 0x065])
    builder.StartFrame() 
        .AddCommand(Command.Read)
        .Xor();

    const frame = builder.Build();

    expect(frame).toEqual([0xAB, 0x01, 0xF2]);
});