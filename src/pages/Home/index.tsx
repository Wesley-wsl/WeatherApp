import React, { useState, useEffect, FormEvent } from "react";

import { IWeather } from "../../@types";
import Weather from "../../components/Weather";
import { api, apiHelpers } from "../../services/api";
import * as S from "./styles";

const Home: React.FC = () => {
    const [weather, setWeather] = useState<IWeather>(Object);
    const [name, setName] = useState("");
    const [tempLow, setTempLow] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                api.get(
                    `weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiHelpers.key}&${apiHelpers.lang}&units=${apiHelpers.units}`,
                )
                    .then(res => {
                        setWeather(res.data);
                        setTempLow(res.data.main.temp < 10);
                    })
                    .catch(error => console.log(error));
            },
            error => console.log("Error: ", error),
        );
    }, []);

    async function searchWeather(e: FormEvent<HTMLFormElement>, city: string) {
        e.preventDefault();
        await api
            .get(
                `weather?q=${city}&appid=${apiHelpers.key}&${apiHelpers.lang}&units=${apiHelpers.units}`,
            )
            .then(res => {
                setWeather(res.data);
                setTempLow(res.data.main.temp < 10);
            })
            .catch(error => console.log(error));
        setName("");
    }

    return (
        <S.Container>
            <S.Logo color={tempLow ? "#000" : "#fff"}>WeatherApp</S.Logo>

            <S.Background className={tempLow ? "snowy" : "cloudy"} />

            <main>
                <Weather data={weather} tempLow={tempLow} />

                <S.WeatherInfo>
                    <S.BackgroundAside
                        className={tempLow ? "snowy" : "cloudy"}
                    />

                    <S.SearchWeather onSubmit={e => searchWeather(e, name)}>
                        <input
                            type="text"
                            name="region"
                            placeholder="Another location"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                        <button type="submit" aria-label="search weather">
                            <i className="fas fa-search" />
                        </button>
                    </S.SearchWeather>

                    {weather.main ? (
                        <S.Details>
                            <p>Weather Details</p>

                            <ul>
                                <li>
                                    Hight/Low
                                    <span>
                                        {weather.main.temp_max}/
                                        {weather.main.temp_min}C°
                                    </span>
                                </li>
                                <li>
                                    Humidity
                                    <span>{weather.main.humidity}%</span>
                                </li>
                                <li>
                                    Wind <span>{weather.wind.speed}km/h</span>
                                </li>
                                <li>
                                    Pressure
                                    <span>{weather.main.pressure}mb</span>
                                </li>
                            </ul>

                            <hr />
                        </S.Details>
                    ) : (
                        <S.Details>
                            <p>Weather Details</p>

                            <ul>
                                <li>
                                    Hight/Low <span>-/-C°</span>
                                </li>
                                <li>
                                    Humidity <span>--%</span>
                                </li>
                                <li>
                                    Wind <span>-km/h</span>
                                </li>
                                <li>
                                    Pressure <span>---mb</span>
                                </li>
                            </ul>

                            <hr />
                        </S.Details>
                    )}
                </S.WeatherInfo>
            </main>
        </S.Container>
    );
};

export default Home;
