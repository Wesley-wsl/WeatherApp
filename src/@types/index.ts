export interface IWeather {
    weather: [
        {
            description: string;
        },
    ];
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
        pressure: number;
    };
    wind: {
        speed: string;
    };
    name: string;
}
