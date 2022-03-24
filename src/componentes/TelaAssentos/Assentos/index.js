import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Assento from "../Assento"

import "./style.css"



export default function Assentos() {

    const { sessaoId } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`)
        .then((resposta)=>{
            const {data} = resposta 
            console.log(data)
        })
    }, [])

    return (
        <div className="Assentos">
            <header>Selecione o(s) assento(s)</header>
            <main>
                <Assento indice={"01"} />
            </main>
        </div>
    )
}