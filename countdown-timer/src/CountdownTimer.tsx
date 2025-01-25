import './App.css';
import { useState, useEffect } from "react";
import TimerHeader from "./Components/TimerHeader";
import TimerBLock from "./Components/TimerBLock";
import TimerFooter from "./Components/TimerFooter";
import {getFormattedDateDiff} from "./Utils";
function CountdownTimer() {
    const initialValues =  getFormattedDateDiff();
    const [days, setDays] = useState(initialValues.days);
    const [hours, setHours] = useState(initialValues.hours);
    const [minutes, setMinutes] = useState(initialValues.minutes);
    const [seconds, setSeconds] = useState(initialValues.seconds);

  useEffect(() => {
    const countdownTimer = setInterval (() => {
        const {days, hours, minutes, seconds} = getFormattedDateDiff();

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }, 250)

      return () => {
        clearInterval(countdownTimer)
      }
  }, [])




  return (
    <main className="container">
      <TimerHeader title="New year is not far away!"></TimerHeader>
      <TimerBLock days={days} hours={hours} min={minutes} sec={seconds} ></TimerBLock>
      <TimerFooter></TimerFooter>
    </main>
  );
}

export default CountdownTimer;
