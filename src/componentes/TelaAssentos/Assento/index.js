import React from "react"
import "./style.css"

export default function Assento({ indice, id, disponivel, setCompra, compra, ingressos, setIngressos }) {
    const [selecionado, setSelecionado] = React.useState(false)


    function selecionarAssento() {
        const {ids} = compra;
        setSelecionado(!selecionado)
        if (!selecionado) {
            const colocarId = addNoArrayDeAssentos(ids, id);
            const novoAssentos= { ...compra, ids: colocarId}
            setCompra(novoAssentos)

            const colocarNome = addNoArrayDeAssentos(ingressos, indice);
            setIngressos(colocarNome);
        } else {
            const deletarId = removerNoArrayDeAssentos(ids, id);
            const novoObjeto = { ...compra, ids: deletarId};
            setCompra(novoObjeto)

            const removerNome = removerNoArrayDeAssentos(ingressos, indice);
            setIngressos(removerNome);
        }
    }

    function addNoArrayDeAssentos(array, novoItem) {
        const colocarNoArray = [...array, novoItem];
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