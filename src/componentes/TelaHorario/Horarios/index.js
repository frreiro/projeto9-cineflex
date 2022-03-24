import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Horario from "../Horario"
import "./style.css"

import axios from "axios"

export default function Horarios() {

    const [horarios, setHorarios] = useState({})
    
    const { filmeId } = useParams();


    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`)
            .then((resposta) => {
                const { data } = resposta
                setHorarios(data)
            })
    }, [])
 

    function renderizarHorarioFilme() {
        const { posterURL, title, days: dias } = horarios;
        return (
            <div className="Horarios">
                <header>Selecione os horários</header>
                <main>
                    {dias.map((dia,indice) => {
                        const { weekday: diaSemana, date: data, showtimes: botoes} = dia;
                        return <Horario key={indice} titulo={`${diaSemana} - ${data}`} botoes={botoes}/>
                    })}
                </main>
                <footer>
                    <div>
                        <img src={posterURL} alt="Filme poster" />
                    </div>
                    <h1>{title}</h1>
                </footer>
            </div>
        )
    }


    const carregando =
        <div className="Carregando">
            <img src="https://c.tenor.com/I6kN-6X7nhAAAAAi/loading-buffering.gif" alt="Carregando"/>
        </div>

        
    return Object.keys(horarios).length !== 0 ? renderizarHorarioFilme() : carregando;
}