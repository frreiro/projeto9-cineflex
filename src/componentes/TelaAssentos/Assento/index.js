import React from "react"
import "./style.css"

export default function Assento({ indice, id, disponivel, setCompra, compra, dados, setDados }) {
    const [selecionado, setSelecionado] = React.useState(false)


    function selecionarAssento() {
        const {ids} = compra;
        const {ingressos} = dados;
        setSelecionado(!selecionado)
        if (!selecionado) {
            const colocarId = addNoArrayDeAssentos(ids, id);
            const novoAssentos= { ...compra, ids: colocarId}
            setCompra(novoAssentos)

            const colocarNome = addNoArrayDeAssentos(ingressos, indice);
            const novoDados = {...dados, ingressos: colocarNome};
            setDados(novoDados);
        } else {
            const deletarId = removerNoArrayDeAssentos(ids, id);
            const novoObjeto = { ...compra, ids: deletarId};
            setCompra(novoObjeto)

            const removerNome = removerNoArrayDeAssentos(ingressos, indice);
            const novoDados = {...dados, ingressos: removerNome};
            setDados(novoDados);
        }
    }

    function addNoArrayDeAssentos(propObjeto, novoItem) {
        const colocarNoArray = [...propObjeto, novoItem];
        return colocarNoArray;
    }

    function removerNoArrayDeAssentos(propObjeto, itemAntigo) {
        const deletarDoArray = [...propObjeto].filter((item) => {
            if (item !== itemAntigo) {
                return item
            }
        })
        return deletarDoArray;
    }


    if (disponivel) {
        const css = `Assento ${selecionado ? "selecionado" : "disponivel"}`
        return (
            <>
                <button className={css} onClick={selecionarAssento}>{indice < 10 ? `0${indice}` : indice}</button>
            </>
        )
    } else {
        return (
            <>
                <button className="Assento indisponivel">{indice}</button>
            </>
        )
    }

}