import { Link } from "react-router-dom"
import "./style.css"

export default function Horario({ titulo, botoes }) {
    return (
        <div className="Horario">
            <h1>{titulo}</h1>
            <div>
                {botoes.map((botao) => {
                    const { name, id } = botao
                    return (
                        <Link to={`sessao/${id}`} >
                            <button>{name}</button>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}