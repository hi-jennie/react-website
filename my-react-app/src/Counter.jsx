import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const decrement = () => {
        // every line will be executed in order, so each setCount(prevCount => prevCount - 1) will subtract 1 from the previous value.this is all about updater function.
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    }

    const increment = () => {
        // When the increment function is called, count stays fixed, so each setCount(count + 1) only adds 1 to the original value.
        setCount(count + 1);
        setCount(count + 1);
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