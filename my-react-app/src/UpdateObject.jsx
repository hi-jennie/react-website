import  {useState} from 'react';


function UpdateObject() {
    const [car, setCar] = useState({name: 'Benz', model: 'E-Class', year: 2024});


    function handleNameChange(e) {
        // {...c, name: e.target.value} is the same as{name: 'Toyota', model: 'Corolla', year: 2024, name: e.target.value} the later name will override the previous name.
        setCar(c => ({...c, name: e.target.value}));
    }

    function handleModelChange(e) {
        setCar(c => ({...c, model: e.target.value}));
    }

    function handleYearChange(e) {   
        setCar(c => ({...c, year: e.target.value}));
    }
    return (
        <div className='car-container'>
            <p>Your Favorite Car: {car.name} {car.model} Made in {car.year}</p>
            <input type='text' value={car.name} onChange={handleNameChange}/>
            <input type='text' value={car.model} onChange={handleModelChange}/>
            <input type='number' value={car.year} onChange={handleYearChange}/>
        </div>
    )
}

export default UpdateObject;