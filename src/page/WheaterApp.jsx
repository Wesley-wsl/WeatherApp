
import '../styles/WeatherApp.scss'


function WeatherApp() {




    return (
        <div>
            <header>
                <h1>WeatherApp</h1>
            </header>

            <div className='background'></div>

            <main>

                <section id='weather'>

                    <div>
                    <h2><span>08°</span> California</h2>
                        <p>06:09 - Sunday - 06 oct 21</p>
                        <p><i class="fas fa-cloud"></i></p>
                    </div>

                </section>


                <section className='weatherInfo'>
                    <div className='background-info'></div>

                    <div id='search'>
                        <input type="text" name="region" id="region" placeholder='Another location' />
                        <button><i class="fas fa-search"></i></button>
                    </div>

                    <div id='locations'>
                        <ul>
                            <li>Birmingham</li>
                            <li>Manchester</li>
                            <li>New York</li>
                            <li>California</li>
                        </ul>
                    </div>


                    <div id='details'>
                        <hr />

                        <p>Weather Details</p>

                        <ul>
                            <li>Cloudy <span>00%</span></li>
                            <li>Humidity <span>00%</span></li>
                            <li>Wind <span>8km/h</span></li>
                            <li>Rain <span>8mm</span></li>
                        </ul>

                        <hr />
                    </div>
                </section>
            </main>



        </div>
    )

}



export default WeatherApp