import Filmes from ".././TelaFilmes/Filmes";
import Horarios from "../TelaHorario/Horarios";
import "./style.css"




export default function App() {
    return (
        <>
        <header className="App">
            <h1>CINEFLEX</h1>
        </header>
        <Filmes/>
        {/* <Horarios/> */}
        </>
    )
}