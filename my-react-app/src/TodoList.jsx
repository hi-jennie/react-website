import {useState} from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask() {
        if(newTask !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }

    }

    function removeTask(index) {
        setTasks(tasks.filter((task, i) => i !== index));
    }

    function moverUp (index) {
        if (index > 0){
            const upDatedTasks = [...tasks];
            [upDatedTasks[index], upDatedTasks[index-1]] = [upDatedTasks[index-1], upDatedTasks[index]];
            setTasks(upDatedTasks);
        }
    }

    function moverDown (index) {
        if (index < tasks.length - 1){
            const upDatedTasks = [...tasks];
            [upDatedTasks[index], upDatedTasks[index+1]] = [upDatedTasks[index+1], upDatedTasks[index]];
            setTasks(upDatedTasks);
        }
    }

    return (
        <div className='todo-list-container'>
            <h2>Todo List</h2>
            <div className='input-container'>
                <input className='input-bar' type='text' value={newTask} onChange={handleInputChange} placeholder='Enter a task'/>
                <button className='add-button' onClick={addTask}>add</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className='task-container'>
                        <span>{task}</span>
                        <button onClick={() => removeTask(index)}>delete</button>
                        <button onClick={() => moverUp(index)}>up</button>
                        <button onClick={() => moverDown(index)}>down</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;