import {useRef, useEffect} from 'react';


function UseRef() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    // when there is component is rerendered
    // useEffect will be called
    // compared to useState, which is used to store the data that needs to be re-rendered when the value is changed
    // useRef won't cause the component to re-render when the value is changed
    // so we use use useEffect to see if the component is re-rendered
    useEffect(() => {
        console.log('component is rerendered');
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = '#d3eafc';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = '#fde4e1';
        inputRef1.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = '#fef6d7';
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = '';
    }
    return (
        <div className='re-render-container'>
            <button className='button1' onClick={handleClick1}>click me !</button>
            <input className='input1' ref={inputRef1} type="text" />

            <button className='button1' onClick={handleClick2}>click me !</button>
            <input className='input1' ref={inputRef2} type="text" />

            <button className='button1' onClick={handleClick3}>click me !</button>
            <input className='input1' ref={inputRef3} type="text" />

        </div>
    )
}

export default UseRef;