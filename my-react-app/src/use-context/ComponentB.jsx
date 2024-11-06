import  {useContext} from 'react';
import  ComponentC from './ComponentC.jsx';
import {UserContext} from './ComponentA.jsx';

function ComponentB() {
    const user = useContext(UserContext);
    return (
        <div className='boxB'>
            <h2>Component B</h2>
            <ComponentC user={user}/>
        </div>
    )
}

export default ComponentB;


/*
function ComponentB(props) {
    const [user, setUser] = useState('Shirley');

    return (
        <div className='boxB'>
            <h2>Component B</h2>
            <p>Hello: {props.user}</p>
            <ComponentC user={props.user}/>
        </div>
    )
}

export default ComponentB;
*/

