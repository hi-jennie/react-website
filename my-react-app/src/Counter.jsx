import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1);
    }

    const increment = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button onClick={decrement} className='count-button'>decrement</button>
            <button onClick={increment} className='count-button'>increment</button>
            <button onClick={reset} className='count-button'>reset</button>
        </div>
    )
}

export default Counter;