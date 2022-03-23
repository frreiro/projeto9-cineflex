import "./style.css"

export default function Horario({titulo}) {
    return (
        <div className="Horario">
            <h1>{titulo}</h1>
            <div>
                <button>19:00</button>
                <button>19:00</button>
            </div>
        </div>
    )
}