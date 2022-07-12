import React from 'react'
import { useState } from 'react'

export default function Todo() {
    const [task, setTask] = useState([])
    const [inputData,setInput]=useState("")
    
    const handleChange = (e) => {
        if (e.target.value.length>0) {
            setInput(e.target.value);
       
        }
      
    }
    const addTask = () => {
        setTask([...task,{name:inputData,done:false,id:task.length}])
    }

    const handleTaskClick = (e) => {
    
        let localTask = task;
        let localElement = localTask.find(item => item.id === e.id);
       let localIndex= localTask.indexOf(localElement)
        localElement = { ...localElement, done: !localElement.done }
        localTask[localIndex] = localElement
        setTask([...localTask])
        
    }
  
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
           <div > <h1>To do list</h1>
            <input type={'text'}  onChange={handleChange} /><button disabled={inputData.length==0} onClick={addTask}>Add</button></div>
            <h5>{task.filter(a=>a.done).length} remaining out of { task.length} task</h5>
            <ul >{task.length > 0 && task.map((e, i) => {
                return <li style={{ textDecoration: e.done ? 'line-through' : "" }} key={i}
                onClick={()=>{handleTaskClick(e)}}
                >{e.name}</li>
            })}</ul>
        </div>
    )
}