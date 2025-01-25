import TimerBox from "./TimerBox";

function TimerBLock (props: any) {

    return (
        <div className="timer-block">
            <TimerBox id="days" title="days"> {props.days} </TimerBox>
            <TimerBox id="hours" title="hours"> {props.hours} </TimerBox>
            <TimerBox id="minutes" title="minutes"> {props.min} </TimerBox>
            <TimerBox id="seconds" title="seconds"> {props.sec} </TimerBox>
        </div>
    )
}

export default TimerBLock