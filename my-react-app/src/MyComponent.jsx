import {useState} from 'react';

function MyComponent() {
    let [name, setName] = useState('Guest');
    let [age, setAge] = useState(0);
    let [isStudent, setIsStudent] = useState(false);

    const setStudentName = () => {
        setName('Shirley');
    }

    const setStudentAge = () => {
        setAge(age+2);
    }

    const setStudentStatus = () => {
        setIsStudent(!isStudent);
    }

    return (
        <div className='student-container'>
            <p>Name: {name}</p>
            <button onClick={setStudentName}>set name</button>

            <p>Age: {age}</p>
            <button onClick={setStudentAge}>set age</button>

            <p>isStudent: {isStudent ? 'Yes' : 'No'}</p>
            <button onClick={setStudentStatus}>Toggle status</button>
        </div>
    )

}

export default MyComponent;