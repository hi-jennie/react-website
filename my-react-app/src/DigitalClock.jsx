import {useState, useEffect} from 'react';
function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        // 如果 hours % 12 的结果为 0，那么 12 就会替代它
        hours = hours % 12 || 12;
        
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    function padZero (number) {
        return (number < 10 ? '0' : '') + number;
    }
    return (
        <div className='clock-container'>
            <p>{formatTime()}</p >
        </div>
    )
}

export default DigitalClock;