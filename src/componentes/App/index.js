import { Routes, Route, useNavigate } from "react-router-dom";
import Filmes from ".././TelaFilmes/Filmes";
import Assentos from "../TelaAssentos/Assentos";
import Horarios from "../TelaHorario/Horarios";
import Sucesso from "../TelaSucesso/Sucesso";
import "./style.css"




export default function App() {

    const navigate = useNavigate()

    const voltar =
        <div onClick={() => navigate(-1)} >
            <ion-icon name="chevron-back-outline">
            </ion-icon>
        </div>

    return (
        <>
            <header className="App">
                {window.location.pathname !== "/" ? voltar : ""}
                <h1>CINEFLEX</h1>
            </header>
            <Routes>
                <Route path="/" element={<Filmes />}></Route>
                <Route path="/filme/:filmeId" element={<Horarios />}></Route>
                <Route path="/sessao/:sessaoId" element={<Assentos />}></Route>
                <Route path="/sucesso" element={<Sucesso />}></Route>
            </Routes>
        </>
    )
}