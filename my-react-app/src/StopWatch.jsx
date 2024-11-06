import {useRef, useEffect, useState} from 'react';

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    // this only define the variable, but not the value
    // 因为这两个都不用展示在页面上，所以不需要用useState，只需要用useRef
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning) {
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(intervalRef.current);
        }   
    },[isRunning]);

    function start() {
        setIsRunning(true);
        // 就像一个时间戳，标记开始时间。
        startTimeRef.current = Date.now();
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setIsRunning(false);
        setElapsedTime(0);
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / 3600000);
        let minutes = Math.floor((elapsedTime % 3600000) / 60000);
        let seconds = Math.floor((elapsedTime % 60000) / 1000);
        let milliSeconds = Math.floor((elapsedTime % 1000)/10);

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliSeconds.toString().padStart(2, '0')}`;
    }

    return (
        <div className='stopWatch-container'>
            <div className='stopWatch'>{formatTime()}</div>
            <div className='control'>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch;