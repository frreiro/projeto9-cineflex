import React from "react"
import "./style.css"

export default function Assento({ indice, id, disponivel }) {
    const [selecionado, setSelecionado] = React.useState(false)

    
    if (disponivel) {
        const css = `Assento ${selecionado ? "selecionado" : "disponivel"}`
        return (
            <>
                <button className={css} onClick={() => setSelecionado(!selecionado)}>{indice}</button>
            </>
        )
    }else {
        return (
            <>
                <button className="Assento indisponivel">{indice}</button>
            </>
        )
    }

}