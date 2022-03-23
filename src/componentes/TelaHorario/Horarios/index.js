import Horario from "../Horario"
import Filme from "../../TelaFilmes/Filme"
import "./style.css"

import Banner1 from "../../../assets/imagens/filme-1.svg"

export default function Horarios() {
    return (
        <div className="Horarios">
            <header>Selecione os horários</header>
            <Horario titulo="Quinta-feira - 24/06/2021"/>
            <Horario titulo="Sexta-feira - 25/06/2021"/>
            <footer>
                <div>
                    <img src={Banner1}/>
                </div>
                <h1>Enola Holmes</h1>
            </footer>
        </div>
    )
}