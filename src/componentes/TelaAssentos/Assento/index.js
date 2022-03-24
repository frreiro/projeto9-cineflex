import React from "react"
import "./style.css"

export default function Assento({indice}) {
    const [selecionado, setSelecionado] = React.useState(false)

    const css = `Assento ${selecionado ? "selecionado" : " "}`

    return (
        <>
            <button className={css} onClick={()=>setSelecionado(!selecionado)}>{indice}</button>
        </>
    )
}