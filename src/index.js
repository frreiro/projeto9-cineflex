import reactDom from "react-dom";
import App from "./componentes/App/"
import {BrowserRouter} from "react-router-dom"

import "./assets/css/reset.css"
import "./assets/css/style.css"


reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.querySelector('.root'))
