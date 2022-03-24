import React from "react"
import "./style.css"

export default function Assento({ indice, id, disponivel,setAssentosEscolhidos, assentosEscolhidos}) {
    const [selecionado, setSelecionado] = React.useState(false)

    function selecionarAssento(){
        setSelecionado(!selecionado)

        
        if(!selecionado){
            const colocarId = [...assentosEscolhidos.ids, id];
            setAssentosEscolhidos({...assentosEscolhidos,ids:colocarId})
        }else{
            const deletarId = [...assentosEscolhidos.ids].filter((assento)=>{
                if(assento !== id){
                    return assento
                }
            })
            setAssentosEscolhidos({...assentosEscolhidos, ids:deletarId})
        }


    }

    
    if (disponivel) {
        const css = `Assento ${selecionado ? "selecionado" : "disponivel"}`
        return (
            <>
                <button className={css} onClick={selecionarAssento}>{indice < 10 ? `0${indice}` : indice}</button>
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