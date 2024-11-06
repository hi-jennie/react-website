import  {useContext} from 'react';
import {UserContext} from './ComponentA.jsx';

function ComponentC() {
    const user = useContext(UserContext);

    return (
        <div className='boxC'>
            <h2>Component C</h2>
            <p>Bye: {user}</p>
        </div>
    )
}

export default ComponentC;

/* using props to pass data from parent to child 
function ComponentC(props) {
    const [user, setUser] = useState('Shirley');

    return (
        <div className='boxC'>
            <h2>Component C</h2>
            <p>Hello: {props.user}</p>
        </div>
    )
}

export default ComponentC;
*/