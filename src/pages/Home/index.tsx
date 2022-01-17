import axios from "axios";
import React, { useState, useEffect, FormEvent } from "react";

import { IWeather } from "../../@types";
import * as S from "./styles";

const Home: React.FC = () => {
    const [weather, setWeather] = useState<IWeather>(Object);
    const [name, setName] = useState("");
    const [exists, setExists] = useState(false);

    const today = new Date();
    const dayName = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const api = {
        key: process.env.REACT_APP_OPEN_WEATHER_KEY,
        base: "https://api.openweathermap.org/data/2.5/",
        lang: "pt-br",
        units: "metric",
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(
                    position.coords.latitude,
                    position.coords.longitude,
                );
                axios
                    .get(
                        `${api.base}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${api.key}&${api.lang}&units=${api.units}`,
                    )
                    .then(res => {
                        setWeather(res.data);
                        setExists(true);
                    })
                    .catch(error => {
                        setExists(false);
                        console.log(error);
                    });
            },
            error => {
                console.log("Error: ", error);
            },
        );
    }, [api.base, api.key, api.lang, api.units]);

    async function searchWeather(e: FormEvent<HTMLFormElement>, city: string) {
        e.preventDefault();
        await axios
            .get(
                `${api.base}weather?q=${city}&appid=${api.key}&${api.lang}&units=${api.units}`,
            )
            .then(res => {
                setWeather(res.data);
                setExists(true);
            })
            .catch(error => {
                setExists(false);
                console.log(error);
            });
        setName("");
    }

    return (
        <S.Container>
            <header>
                {exists ? (
                    <h1 className={`${weather.main.temp < 10 ? "black" : ""}`}>
                        WeatherApp
                    </h1>
                ) : (
                    <h1>WeatherApp</h1>
                )}
            </header>

            {exists ? (
                <div
                    className={`background ${
                        weather.main.temp >= 10 ? "cloudy" : ""
                    } ${weather.main.temp < 10 ? "snowy" : ""}`}
                />
            ) : (
                <div className="background cloudy" />
            )}

            <main>
                <section id="weather">
                    {exists ? (
                        <div>
                            <h2
                                className={`${
                                    weather.main.temp < 10 ? "black" : ""
                                }`}
                            >
                                <span>{Math.round(weather.main.temp)}C°</span>{" "}
                                {weather.name}
                            </h2>
                            <p
                                className={`${
                                    weather.main.temp < 10 ? "black" : ""
                                }`}
                            >
                                {today.getHours()}:{today.getMinutes()} -{" "}
                                {dayName[today.getDay()]} -{" "}
                                {String(today.getDate()).padStart(2, "0")}/
                                {String(today.getMonth() + 1).padStart(2, "0")}/
                                {today.getUTCFullYear()}
                            </p>
                            <p
                                className={`${
                                    weather.main.temp < 10 ? "black" : ""
                                }`}
                            >
                                <i className="fas fa-cloud" /> -{" "}
                                {weather.weather[0].description}
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2>
                                <span>C°</span> CityName
                            </h2>
                            <p>
                                {today.getHours()}:{today.getMinutes()} -{" "}
                                {dayName[today.getDay()]} -{" "}
                                {String(today.getDate()).padStart(2, "0")}/
                                {String(today.getMonth() + 1).padStart(2, "0")}/
                                {today.getUTCFullYear()}
                            </p>
                            <p>
                                <i className="fas fa-cloud" /> - description
                            </p>
                        </div>
                    )}
                </section>

                <section className="weatherInfo">
                    {exists ? (
                        <div
                            className={`background-info ${
                                weather.main.temp >= 10 ? "cloudy" : ""
                            } ${weather.main.temp < 10 ? "snowy" : ""}`}
                        />
                    ) : (
                        <div className="background-info cloudy" />
                    )}

                    <div>
                        <form
                            action=""
                            id="search"
                            onSubmit={e => searchWeather(e, name)}
                        >
                            <input
                                type="text"
                                name="region"
                                id="region"
                                placeholder="Another location"
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                            <button type="submit" aria-label="search weather">
                                <i className="fas fa-search" />
                            </button>
                        </form>
                    </div>

                    <div id="locations">
                        <ul>
                            <li>Brasília</li>
                            <li>Canadá</li>
                            <li>New York</li>
                            <li>California</li>
                        </ul>
                    </div>

                    {exists ? (
                        <div id="details">
                            <hr />

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
                        </div>
                    ) : (
                        <div id="details">
                            <hr />

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
                        </div>
                    )}
                </section>
            </main>
        </S.Container>
    );
};

export default Home;
