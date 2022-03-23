import "./style.css"

export default function Filme({banner}){
    return(
        <div className="Filme">
            <img src={banner} alt="Filme"/>
        </div>
    )
}