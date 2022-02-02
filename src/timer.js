import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { setOverdrive } from './state/overdriveSlice';

export const Timer = () => {

    const dispatch = useDispatch();
    const [seconds, setSeconds] = useState(10);
    
    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => {setSeconds(seconds - 1)}, 1000);
        } else {
            dispatch(setOverdrive(false));
        }
    }, [seconds]);

    return <div>
        Go go go 🔥🔥🔥 <span>{seconds}</span> seconds left!
    </div>
}