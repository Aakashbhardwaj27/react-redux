import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index'
import Folder from './components/folder';
import explorer from './explorer';
import { useState } from 'react';
import Debounce from './debounce';
import Todo from './todoList';

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const [inputData,setInputData] =useState("")

  const increment = () => {
    dispatch(actions.increment());
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }

  const addBy = () => {
    dispatch(actions.addBy(15))
  }

  const handleChange = (e) => {
    setInputData(e.target.value)
  }

  const debounceFun = (fun, delay) => {
    let timer;
   
    return function (...args) {
      if (timer) { clearTimeout(timer) }
        timer=setTimeout(() => {
      fun(...args)
    }, delay);
    }
  

  
    
  }

  // const mydebounce = (cb, d) => {
  //   let timer;
  //   return function (...args) {
  //     if (timer) {
  //       clearInterval(timer)
  //     }

  //     setTimeout(() => {
  //       cb(...args)
  //     }, d);
  //   }
    
  // }

  
  

  const handleInput = debounceFun((e) => {
  
    setInputData(e.target.value)
  },1000)
  return (
    <div>
        {/* <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add</button>
      <h1>Directory App</h1>
    
      <div style={{border:'1px solid grey',minWidth:'200px',minHeight:'400px',width:'fit-content',padding:'1rem',height:'100%',backgroundColor:'black'}}><Folder explorer={explorer} /></div>
      <br></br>
      <h1>Debounce</h1>
      <input placeholder='search'  onChange={handleInput} />
      {inputData}

      <h1>Chess UI</h1>
      <div>
        {[...Array(8)].map((e,i) => {
          return<div style={{ display: 'flex', flexDirection: 'row'}}>
            {[...Array(8)].map((n, k) => <div style={{ width: '75px', height: '75px', border: '1px solid black', backgroundColor: ((k + i) % 2 == 0) ? 'white' : 'black',color: ((k + i) % 2 !== 0) ? 'white' : 'black' }}>
              {k==0&& i+1}
            </div>
            )}
          </div>
        }
        )}
      </div> */}
      <Debounce />
      <Todo />
    </div>
  );
}

export default App;
