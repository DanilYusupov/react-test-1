import { useState } from "react"
import { useStopwatch } from 'react-timer-hook';

export const TestPage = () => {

    const [clicks, setClicks] = useState(0);
    const [countDown, setCountDown] = useState(3);
    const {
        seconds,
        reset,
    } = useStopwatch({autoStart: true});

    const handleClick = () => {
        setCountDown(countDown - 1);
        console.log(`CountDown: ${countDown}, seconds: ${seconds}`);
        if (seconds > 1) {
            setClicks(clicks + 1);
            setCountDown(3);
            reset();
        } else {
            if (countDown <= 0) {
                console.log('More than 3 clicks per second');
            } else {
                setClicks(clicks + 1);
            }
        }
    }

    return (
        <section>
            <p>
                <span>{clicks}</span> cicks!
            </p>
            <button onClick={handleClick}>
                Press me
            </button>
        </section>
    )

}