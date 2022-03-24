import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Assento from "../Assento"

import "./style.css"



export default function Assentos() {

    const [sessao, setSessao] = useState({})
    const [assentosEscolhidos, setAssentosEscolhidos] = useState({
        ids: [],
        name:"",
        cpf:""
    });
    console.log(assentosEscolhidos)

    const { sessaoId } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`)
            .then((resposta) => {
                const { data } = resposta
                setSessao(data)
            })
    }, [])


    function reservarAssento(){
        const nomeComprador = document.querySelector(".comprador-nome").value;
        const cpfComprador = document.querySelector(".comprador-cpf").value;
        if(nomeComprador.length < 3) alert ("Insira um nome válido")
        if(cpfComprador.length !== 11) alert ("Insira um cpf válido com 11 números")
        setAssentosEscolhidos({...assentosEscolhidos, name:nomeComprador, cpf:cpfComprador});
    }





    function renderizarAssentos() {
        const { name: hora, day: dia, seats: poltronas, movie: filme } = sessao;
        const { title: titulo, posterURL: poster } = filme;
        const { weekday: diaDaSemana } = dia;
        

        return (
            <div className="Assentos">
                <header>Selecione o(s) assento(s)</header>
                <main>
                    {poltronas.map((assento) => {
                        const { id, name, isAvailable } = assento;
                        return (
                            <Assento
                                key={id + name}
                                indice={name}
                                id={id}
                                disponivel={isAvailable}
                                setAssentosEscolhidos={setAssentosEscolhidos} 
                                assentosEscolhidos={assentosEscolhidos}
                                />
                        )
                    })}
                </main>
                <section>
                    <div>
                        <button className="exemplo selecionado"></button>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <button className="exemplo disponivel"></button>
                        <p>Disponivel</p>
                    </div>
                    <div>
                        <button className="exemplo indisponivel"></button>
                        <p>Indisponivel</p>
                    </div>
                </section>
                <section className="dados-comprador">
                    <h1>Nome do comprador</h1>
                    <input className="comprador-nome" placeholder="Digite seu nome..." />
                    <h1>CPF do comprador</h1>
                    <input className="comprador-cpf"  placeholder="Digite seu CPF..." />
                </section>
                <section className="reservar">
                    <button onClick={reservarAssento}>Reservar assento(s)</button>
                </section>
                <footer>
                    <div>
                        <img src={poster} alt="Filme poster" />
                    </div>
                    <section>
                        <h1>{titulo}</h1>
                        <h1>{`${diaDaSemana} - ${hora}`}</h1>
                    </section>
                </footer>
            </div>
        )
    }


    const carregando =
        <div className="Carregando">
            <img src="https://c.tenor.com/I6kN-6X7nhAAAAAi/loading-buffering.gif" alt="Carregando" />
        </div>


    return Object.keys(sessao).length !== 0 ? renderizarAssentos() : carregando
}