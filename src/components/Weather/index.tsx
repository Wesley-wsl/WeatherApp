import React from "react";

import { IWeatherProps } from "../../@types";
import { date, dayWeek, hours, minutes } from "../../utils/date";
import { Container } from "./styles";

const Weather: React.FC<IWeatherProps> = ({ data, tempLow }) => {
    return (
        <Container color={tempLow ? "#000" : "#fff"}>
            {data.main ? (
                <>
                    <h2 className={`${data.main.temp < 10 ? "black" : ""}`}>
                        <span>{Math.round(data.main.temp)}C°</span> {data.name}
                    </h2>
                    <p className={`${data.main.temp < 10 ? "black" : ""}`}>
                        {hours}:{minutes} - {dayWeek} - {date}
                    </p>
                    <p className={`${data.main.temp < 10 ? "black" : ""}`}>
                        <i className="fas fa-cloud" /> -{" "}
                        {data.weather[0].description}
                    </p>
                </>
            ) : (
                <>
                    <h2>
                        <span>0C°</span> CityName
                    </h2>
                    <p>
                        {hours}:{minutes} - {dayWeek} - {date}
                    </p>
                    <p>
                        <i className="fas fa-cloud" /> - Description
                    </p>
                </>
            )}
        </Container>
    );
};

export default Weather;
