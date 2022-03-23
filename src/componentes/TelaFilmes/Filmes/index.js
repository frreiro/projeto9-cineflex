import Filme from "../../TelaFilmes/Filme"
import "./style.css"

import Banner1 from "../../../assets/imagens/filme-1.svg"
import Banner2 from "../../../assets/imagens/filme-2.svg"


export default function Filmes() {
    return (
        <div className="Filmes">
            <header>Selecione o filme</header>
            <main>
                <Filme banner={Banner1}/>
                <Filme banner={Banner2}/>
                <Filme banner={Banner1}/>
                <Filme banner={Banner2}/>
            </main>
        </div>
    )
}