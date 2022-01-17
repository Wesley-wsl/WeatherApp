import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <GlobalStyle />
        </BrowserRouter>
    );
};

export default App;
