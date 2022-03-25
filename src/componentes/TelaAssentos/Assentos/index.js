import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

import Assento from "../Assento"

import "./style.css"



export default function Assentos({ dados, setDados }) {

    const [sessao, setSessao] = useState({})
    const [compra, setCompra] = useState({
        ids: [],
        name: "",
        cpf: ""
    });

    const { sessaoId } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`)
            .then((resposta) => {
                const { data } = resposta
                setSessao(data)
                salvarDados(data)
            })
    }, [])

    function salvarDados({ movie, day, name }) {
        const { title: titulo } = movie;
        const { date: dia } = day;
        const novoDados = { ...dados, filme: titulo, dia: dia, hora: name }
        setDados(novoDados);
    }


    function reservarAssento() {
        const { name, ids, cpf } = compra
        if (verificarObjeto(compra)) {
            //fazer o post
            const requisicao = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
                , compra);

                requisicao.then((sucesso)=>{
                    setDados({ ...dados, nome: name, cpf: cpf })
                })

                requisicao.catch((error)=>{
                    console.log(error.respose);
                })
            
            
        } else {
            verificarInputs(name, cpf, ids)
        }

    }



    function verificarObjeto(assentos) {
        const { ids, name, cpf } = assentos
        return ids.length > 0 && name.length > 1 && cpf.length === 11 ? true : false
    }



    function verificarInputs(nome, cpf, ids) {
        if (cpf.length !== 11) alert("Insira um cpf válido com 11 números")
        if (nome.length < 3) alert("Insira um nome válido")
        if (ids.length === 0) alert("Escolha um assento")
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
                                setCompra={setCompra}
                                compra={compra}
                                dados={dados}
                                setDados={setDados}
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
                    <input className="comprador-nome" placeholder="Digite seu nome..." onChange={input => setCompra({ ...compra, name: input.target.value })} />
                    <h1>CPF do comprador</h1>
                    <input className="comprador-cpf" placeholder="Digite seu CPF..." onChange={input => setCompra({ ...compra, cpf: input.target.value })} />
                </section>
                <section className="reservar">
                    <Link to={verificarObjeto(compra) ? "/sucesso" : ""}>
                        <button onClick={reservarAssento}>Reservar assento(s)</button>
                    </Link>
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