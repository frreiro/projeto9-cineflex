import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react"

import Filmes from ".././TelaFilmes/Filmes";
import Assentos from "../TelaAssentos/Assentos";

import Horarios from "../TelaHorario/Horarios";
import Sucesso from "../TelaSucesso/Sucesso";
import "./style.css"




export default function App() {
    const [dados, setDados] = useState({
        filme:"",
        dia: "",
        hora:"",
        nome: "",
        cpf: "",
        ingressos: []
    });



    return (
        <BrowserRouter>
            <header className="App">
                <h1>CINEFLEX</h1>
            </header>
            <Routes>
                <Route path="/" element={<Filmes/>}></Route>
                <Route path="/filme/:filmeId" element={<Horarios/>}></Route>
                <Route path="/sessao/:sessaoId" element={<Assentos 
                    dados={dados}
                    setDados={setDados}

                />}></Route>
                <Route path="/sucesso" element={<Sucesso dados={dados}
                
                />}></Route>
            </Routes>
        </BrowserRouter>
    )
}