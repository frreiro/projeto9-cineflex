import Assento from "../Assento"

import "./style.css"



export default function Assentos() {


    return (
        <div className="Assentos">
            <header>Selecione o(s) assento(s)</header>
            <main>
                <Assento indice={"01"}/>
            </main>
        </div>
    )
}