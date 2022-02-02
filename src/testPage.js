import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useStopwatch } from 'react-timer-hook';
import { giveTrophy } from './state/trophySlice'
import { setOverdrive } from './state/overdriveSlice';

export const TestPage = () => {

    const trophies = useSelector((state) => state.trophy.value);
    const overdrive = useSelector((state) => state.overdrive.value);
    const dispatch = useDispatch();

    const [buttonColor, setButtonColor] = useState('white');
    const [isDecreasing, setIsDecreasing] = useState(false);

    const [clicks, setClicks] = useState(0);
    const [countDown, setCountDown] = useState(3);
    const {
        seconds,
        reset,
    } = useStopwatch({autoStart: true});
    
    useEffect(() => {
        let timer = setTimeout(onTimerExpire, 10 * 1000);
        if (isDecreasing) {
            if (clicks > 0) {
                setTimeout(() => {setClicks(clicks - 1)}, 1000);
            } else {
                setIsDecreasing(false);
            }
        }
        if (clicks > 0 && (clicks % 10 === 0)) {
            if ((trophies.length) < clicks / 10) {
                console.log('Giving trophy');
                dispatch(giveTrophy());
            }
        }

        return () => {
            clearTimeout(timer);
        }
    }, [buttonColor, clicks]);

    const handleClick = () => {
        const increment = overdrive ? 2 : 1;
        checkForOverdrive();
        setButtonColor('white');
        setCountDown(countDown - 1);
        if (seconds > 1) {
            setClicks(clicks + increment);
            setCountDown(3);
            reset();
        } else {
            if (countDown <= 0) {
                console.log('More than 3 clicks per second');
            } else {
                setClicks(clicks + increment);
            }
        }
    }

    const onTimerExpire = () => {
        setButtonColor('#EAE38E');
        if (clicks > 0) {
            setIsDecreasing(true);
            setClicks(clicks - 1);
        }
    }

    const checkForOverdrive = () => {
        if (Math.floor(Math.random() * 20) === 10) {
        // if (Math.floor(Math.random() * 2) == 1){
            dispatch(setOverdrive(true));
        }
    }

    return (
        <section>
            <p>
                <span>{clicks}</span> clicks!
            </p>
            <button style={{backgroundColor: buttonColor}} onClick={handleClick}>
                Press me
            </button>
        </section>
    )

}