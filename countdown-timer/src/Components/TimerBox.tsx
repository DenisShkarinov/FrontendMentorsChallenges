
function TimerBox (props: any) {
    return (
        <div className="timer-box">
            <div className="timer-box__content" id={props.id}><h2>{props.children}</h2></div>
            <h3>{props.title}</h3>
        </div>
    )
}

export default TimerBox