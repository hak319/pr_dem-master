import style from './dudu.module.css';


export default function Dudu(){
    return(
        <>
            <div className="header">
                <h2>Your score:</h2> <h2 id="score">0</h2>
                <h2>Time Left:</h2> <h2 id="time-left">60</h2>
            </div>
            <div className={style.grid}></div>
        </>
    )
}