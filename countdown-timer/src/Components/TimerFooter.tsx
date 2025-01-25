import {createUseStyles} from "react-jss";
import PatternHills from '../img/pattern-hills.svg'
import List from "./List";

const footer = createUseStyles({
    timerFooter: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 195,
        background: {
            image: `url(${PatternHills}`,
            position: "center",
            repeat: "no-repeat"
        }
    }
})
function TimerFooter () {
    const classes = footer()
    return (
        <div className={classes.timerFooter}>
            <List />
        </div>
    )
}

export default TimerFooter