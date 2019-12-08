import 'reflect-metadata';
import { TemperatureSensor, Http, IHttp, IConverter } from "../TemperatureSensor";
import { Mock, It } from 'moq.ts';

test('TemperatureSensor', () =>
{
    // Given
    const httpMock = new Mock<IHttp>();
    httpMock.setup(x => x.Get(It.IsAny<string>()))
        .returns(5);    
    const converterMock = new Mock<IConverter>();
    converterMock.setup(x => x.ToCelcius(5))
            .returns(105);
    const sut = new TemperatureSensor(httpMock.object(), converterMock.object());

    // When
    const temperature = sut.Read();

    // Then
    expect(temperature).toBe(105);
});