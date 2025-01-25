import {createUseStyles} from "react-jss";

const headerStyles = createUseStyles({
    timerHeader: {
        padding: '5em 0',
        textAlign: "center"
    }
})
function TimerHeader (props: any) {
    const classes = headerStyles()
    return (
        <div className={ classes.timerHeader}>
            <h2>{ props.title }</h2>
        </div>
    )
}

export default TimerHeader