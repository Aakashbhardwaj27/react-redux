import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index'



function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(actions.increment());
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }

  const addBy = () => {
    dispatch(actions.addBy(15))
  }


  return (
    <div className='app-screen'>
        <h2>{counter}</h2>
     <span> <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add 15</button></span>
     
      
    
    </div>
  );
}

export default App;
