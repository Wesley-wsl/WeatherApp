import '../styles/WeatherApp.scss'
import axios from 'axios'
import { useState } from 'react'

function WeatherApp() {
    const [weather, setWeather] = useState({})
    const [name, setName] = useState('')
    const [exists, setExists] = useState(false)

    const api = {
        key: process.env.REACT_APP_OPEN_WEATHER_KEY,
        base: "https://api.openweathermap.org/data/2.5/",
        lang: 'pt-br',
        units: 'metric'
    }

    async function searchWeather(city) {
        await axios.get(`${api.base}weather?q=${city}&appid=${api.key}&${api.lang}&units=${api.units}`).then(res => {
            setWeather(res.data)
            setExists(true)
        }).catch((error) => {
            setExists(false)
            console.log(error)
        })
    }




    return (
        <div>
            <header>
                {exists ? <h1 className={`${weather.main.temp < 10 ? 'black' : ''}`}>WeatherApp</h1>
                    : <h1>WeatherApp</h1>}

            </header>

            {exists ? <div className={`background ${weather.main.temp >= 10 ? 'cloudy' : ''} ${weather.main.temp < 10 ? 'snowy' : ''}`}></div>
                : <div className='background cloudy'></div>}

            <main>
                <section id='weather'>

                    {exists ?
                        <div>
                            <h2 className={`${weather.main.temp < 10 ? 'black' : ''}`}><span>{Math.round(weather.main.temp)}C°</span> {weather.name}</h2>
                            <p className={`${weather.main.temp < 10 ? 'black' : ''}`}>06:09 - Sunday - 06 oct 21</p>
                            <p className={`${weather.main.temp < 10 ? 'black' : ''}`}><i className="fas fa-cloud"></i> - {weather["weather"][0]["description"]}</p>
                        </div> :
                        <div>
                            <h2><span>C°</span> CityName</h2>
                            <p>06:09 - Sunday - 06 oct 21</p>
                            <p><i className="fas fa-cloud"></i> - description</p>
                        </div>}
                </section>

                <section className='weatherInfo'>
                    {exists ? <div className={`background-info ${weather.main.temp >= 10 ? 'cloudy' : ''} ${weather.main.temp < 10 ? 'snowy' : ''}`}></div>
                        : <div className={`background-info cloudy`}></div>}


                    <div id='search'>
                        <input type="text" name="region" id="region" placeholder='Another location' value={name} onChange={event => setName(event.target.value)} />
                        <button onClick={() => searchWeather(name)}><i className="fas fa-search"></i></button>
                    </div>

                    <div id='locations'>
                        <ul>
                            <li>Birmingham</li>
                            <li>Manchester</li>
                            <li>New York</li>
                            <li>California</li>
                        </ul>
                    </div>


                    {exists ? <div id='details'>
                        <hr />

                        <p>Weather Details</p>

                        <ul>
                            <li>Hight/Low <span>{weather.main.temp_max}/{weather.main.temp_min}C°</span></li>
                            <li>Humidity <span>{weather.main.humidity}%</span></li>
                            <li>Wind <span>{weather.wind.speed}km/h</span></li>
                            <li>Pressure <span>{weather.main.pressure}mb</span></li>
                        </ul>

                        <hr />
                    </div> :
                        <div id='details'>
                            <hr />

                            <p>Weather Details</p>

                            <ul>
                                <li>Hight/Low <span>-/-C°</span></li>
                                <li>Humidity <span>--%</span></li>
                                <li>Wind <span>-km/h</span></li>
                                <li>Pressure <span>---mb</span></li>
                            </ul>

                            <hr />
                        </div>
                    }
                </section>
            </main>



        </div>
    )
}


export default WeatherApp
