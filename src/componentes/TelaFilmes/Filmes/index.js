import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import Filme from "../../TelaFilmes/Filme"

import "./style.css"

export default function Filmes() {

    const [filmes, setFilmes] = useState([{}])


    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promise.then((resposta) => {
            const { data } = resposta;
            setFilmes(data)
        })
    }, [])


    const listaFilmes =
        <div className="Filmes">
            <header>Selecione o filme</header>
            <main>
                {filmes.map((filme, indice) => {
                    const { id, posterURL } = filme
                    return (
                        <Link to={`/filme/${id}`}>
                            <Filme key={id + indice} banner={posterURL} />
                        </Link>
                    )
                })}
            </main>
        </div>

    const carregando =
        <div className="Carregando">
            <img src="https://c.tenor.com/I6kN-6X7nhAAAAAi/loading-buffering.gif"/>
        </div>

    return filmes.length > 1 ? listaFilmes : carregando;
}