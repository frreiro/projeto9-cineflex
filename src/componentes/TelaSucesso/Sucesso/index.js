import { Link, useLocation  } from "react-router-dom"
import "./style.css"

export default function Sucesso() {

    const {state} = useLocation()


    const { cpf, name, ingressos, filme, dia, hora } = state

    

    function formatarCpf(cpf) {
        const ultimos = cpf.slice(cpf.length - 2);
        const separar1 = cpf.slice(0, 3)
        const separar2 = cpf.slice(3, 6)
        const separar3 = cpf.slice(6, 9)
        const cpfValido = `${separar1}.${separar2}.${separar3}-${ultimos}`
        return cpfValido;
    }

    const telaSucesso = <div className="Sucesso">
        <header>Pedido feito <br /> com sucesso!</header>
        <main>
            <section>
                <h1>Filmes e sessão</h1>
                <p>{filme}</p>
                <p>{dia} <span>{hora}</span></p>
            </section>
            <section >
                <h1>Ingressos</h1>
                {ingressos.map((ingresso) => {
                    return <p key={ingresso} >Assento {ingresso}</p>
                })}
            </section>
            <section >
                <h1>Comprador</h1>
                <p>Nome: {name}</p>
                <p>CPF: {formatarCpf(cpf)}</p>
            </section>
        </main>
        <footer>
            <Link to="/">
                <button>Voltar pra Home</button>
            </Link>
        </footer>
    </div>

    const carregando =
        <div className="Carregando">
            <img src="https://c.tenor.com/I6kN-6X7nhAAAAAi/loading-buffering.gif" alt="Carregando" />
        </div>



    return name.length > 0 && cpf.length > 0 && ingressos.length > 0 ? telaSucesso : carregando






}