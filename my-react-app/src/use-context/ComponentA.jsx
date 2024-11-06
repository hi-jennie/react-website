import  {useState, createContext} from 'react';
import  ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA() {
    const [user, setUser] = useState('Shirley');

    return (
        <div className='boxA'>
            <h2>Component A</h2>
            <p>Hello: {user}</p>
            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>
        </div>
    )
}
export default ComponentA;



/* using props to pass data from parent to child
function ComponentA() {
    const [user, setUser] = useState('Shirley');

    return (
        <div className='boxA'>
            <h2>Component A</h2>
            <p>Hello: {user}</p>
            <ComponentB user={user}/>
        </div>
    )
}

export default ComponentA;

*/

/*

1.	数据共享：<UserContext.Provider> 包裹 ComponentB 后，ComponentB 以及它的任何后代组件（如 ComponentC）都可以通过 useContext(UserContext) 获取 user 的值，而不需要通过 props 层层传递。
2.	减少重复传递：如果需要 ComponentC 获取 user 值，但 ComponentB 本身并不直接使用 user，这样可以避免在 ComponentB 中设置不必要的 props。
3.	提高代码简洁性：使用 Provider 包裹时，可以直接从 Context 中获取数据，减少代码冗余，尤其在多层嵌套的情况下。


*/