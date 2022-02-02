import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useStopwatch } from 'react-timer-hook';
import { giveTrophy, clearTrophy } from './state/trophySlice'

export const TestPage = () => {

    const hasTrophy = useSelector((state) => state.trophy.value);
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
            console.log('Giving trophy');
            dispatch(giveTrophy())
        } else {
            if (hasTrophy) {
                console.log('Removing trophy');
                dispatch(clearTrophy());
            }
        }

        return () => {
            clearTimeout(timer);
        }
    }, [buttonColor, clicks]);

    const handleClick = () => {
        setButtonColor('white');
        setCountDown(countDown - 1);
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

    const onTimerExpire = () => {
        setButtonColor('#7BB1B8');
        if (clicks > 0) {
            setIsDecreasing(true);
            setClicks(clicks - 1);
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