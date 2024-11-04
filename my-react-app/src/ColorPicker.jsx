import React, {useState} from 'react';


function ColorPicker() {
    const [color, setColor] = useState('lightblue');

    function handleColorChange(e) {
        setColor(e.target.value);
    }
    return (
        <div className='color-picker-container'>
            <h2>Color Picker</h2>
            <div className='color-display' style={{backgroundColor: color}}>
                <p style={{color: 'white'}}>display you color: {color}</p>
            </div>
            <div className='color-choose'>
                <label>choose your color</label>
                <input type='color' value={color} onChange={handleColorChange}/>
            </div>
            
        </div>
    );
}

export default ColorPicker;