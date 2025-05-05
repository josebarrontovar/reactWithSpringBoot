import {useState} from "react";

export function ListTask(){
    const [task,setTask]=useState([]);
    const [newTask,setNewTask]=useState('');


    const addTask=()=>{
        if(newTask.trim()!==''){
            setTask([...task,newTask]);
            setNewTask('');
        }
    }

    return (
        <div>
            <h2> Task List</h2>
            <input type='text' value={newTask}  onChange={(e)=>setNewTask(e.target.value)}/> 
            <button onClick={addTask}>Agregar Tarea</button>
            <ul>
                {task.map((data,index)=>(
                    <li key={index}>{data}</li>
                ))}
            </ul>


        </div>
    )
}