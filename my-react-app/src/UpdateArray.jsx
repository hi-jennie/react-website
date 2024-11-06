import {useState} from 'react';

function  UpdateArray() {
    const [foods, setFoods] = useState(['rice', 'beans', 'orange', 'apple']);

    function handelAddFood() {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value='';
        setFoods(f => [...f, newFood]);
    }

    function handleDelFood(index) {
        setFoods(f => f.filter((food, i) => i !== index));
    }

    return (
        <div className='food-container'>
            <p>What to eat today</p>
            <ul>
                {foods.map((food, index)=>(
                    <li key={index} onClick={()=>handleDelFood(index)}>{food}</li>
                ))}
            </ul>
            <input type='text' id='foodInput' placeholder='Enter your food'/>
            <button onClick={handelAddFood}>add</button>
        </div>
    );
}

export default UpdateArray;