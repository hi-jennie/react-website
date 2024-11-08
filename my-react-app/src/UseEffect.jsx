import {useState, useEffect} from 'react';

function UseEffect() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        });
    });

    // this means that the effect will only run when the width or height changes
    // useEffect(() => {
    //     document.title = `size: ${width} x ${height}`;
    // },[width, height]);

    return (<>
        <div className='window-size-container'>
            <h2>Window Size</h2>
            <p className='window-size'>Width: {width}</p>
            <p className='window-size'>Height: {height}</p>
        </div>

    </>)
}

export default UseEffect;