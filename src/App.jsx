import './styles/App.scss';
import WeatherApp from './page/WheaterApp'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                    <Route exact path='/' component={WeatherApp}></Route>
            </BrowserRouter>

        </div>
    );
}

export default App;
