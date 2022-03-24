import { BrowserRouter, Routes, Route } from "react-router-dom";

import Filmes from ".././TelaFilmes/Filmes";
import Assentos from "../TelaAssentos/Assentos";

import Horarios from "../TelaHorario/Horarios";
import "./style.css"




export default function App() {
    return (
        <BrowserRouter>
            <header className="App">
                <h1>CINEFLEX</h1>
            </header>
            <Routes>
                <Route path="/" element={<Filmes/>}></Route>
                <Route path="/filme/:filmeId" element={<Horarios/>}></Route>
                {/* possivel erro na linha de baixo*/}
                <Route path="/sessao/:sessaoId" element={<Assentos />}></Route>
            </Routes>
        </BrowserRouter>
    )
}