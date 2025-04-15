import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import { TodolistAction } from '../Action/TodolistAction'
import {TodolistDeletion} from '../Action/TodolistAction'
import { TodolistUpdate } from '../Action/TodolistAction'
import { fetchTodo } from '../Action/TodolistAction'


export const Todolistapp=()=>{
const tasks = useSelector((state)=>state.TodoReducer.list)
console.log("This is list",tasks)
const [inputData,setInputData] = useState([])
const [updateId,setUpdateId] = useState(null);
const [updateTask,setUpdateTask] = useState("")
const dispatch= useDispatch()
const handleChange=(e)=>{
    e.preventDefault()
    setInputData(e.target.value)
}
const handleAddTodo=()=>{
    dispatch(TodolistAction(inputData))
    setInputData('');
    

}
const handleTodolistEdit=(task)=>{
    setUpdateId(task.id);
    setUpdateTask(task.data);
}
const handleAddTodoUpdate=()=>{
    dispatch(TodolistUpdate(updateId,updateTask))
    setUpdateId(null)
    setUpdateTask("")
}



const handleFetchData=()=>{
    dispatch(fetchTodo())
}

    return(
        <div>
            <div className='todo-main-div'>
            <div className='todo-div'>
            <div className='title-div'>
            <h2>My ToDoList App</h2>
            </div>
            <div className='input-div'>
            <input className='input-value' placeholder='enter your task' value={inputData} onChange={handleChange}></input>
            <button className='add-btn' onClick={handleAddTodo}>Add Task</button>
            <button className='add-btn' onClick={handleFetchData}>Fetch Data</button>
            </div>
            <div className='list-div'>
            <h3>Task List:</h3>
            <ul>        
                {tasks.map((task)=>
                    <li key={task.id}>
                        {updateId===task.id?(
                            <>
                                <input value={updateTask} onChange={(e)=>setUpdateTask(e.target.value)}/>
                            
                            <button className="update-btn" onClick={handleAddTodoUpdate}>update</button>
                            <button className="cancel-btn" onClick={()=>setUpdateId(null)}>cancel</button>
                            </>
                        ):
                        (
                        <>
                        {task.data}
                        <button className='delete-btn' onClick={()=>dispatch(TodolistDeletion(task.id))}>Delete</button>
                        <button className='edit-btn' onClick={()=>handleTodolistEdit(task)}>Edit</button>
                        </>
                    
                        )}
                    </li>
                )}
             </ul>
            </div>
            
            
             </div>
             </div>
        </div>
    )
}