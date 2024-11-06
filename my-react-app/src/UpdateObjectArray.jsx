import {useState} from 'react';

function UpdateObjectArray() {
    const [Families, setFamilies] = useState([]);

    const [age, setAge] = useState(0);
    const [name, setName] = useState('');
    const [relation, setRelation] = useState('');

    function handleAddFamily() {
        const newMember = {relation: relation, name: name, age: age};
        setFamilies(f => [...f, newMember]);
        setRelation('');
        setName('');
        setAge(0);
    }

    function handleRemoveFamily(index){
        setFamilies(f => f.filter((member, i) => i !== index));
    }

    function handleAgeChange(e) {
        setAge(e.target.value);
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleRelationChange(e) {
        setRelation(e.target.value);
    }

    return (
    <div className='family-member-container'>
        <h2>Our Family members</h2>
        <ul>
            {Families.map((member, index) => (
                <li key={index} onClick={() => handleRemoveFamily(index)}>{member.relation} {member.name} {member.age} years old</li>
            ))}
        </ul>
        <div className='family-input-container'>
            <input type='text' value={relation} onChange={handleRelationChange} placeholder='Relationship'/>
            <input type='text' value={name} onChange={handleNameChange} placeholder='Name'/>
            <input type='number' value={age} onChange={handleAgeChange}/>
            <button onClick={handleAddFamily}>add</button>
        </div>
    </div>)
}

export default UpdateObjectArray;