
import{useState} from 'react';
function App() {
let [counter,setCounter]=useState(15);

const addValue=()=>{
  setCounter(counter+1);
}
const lossvalue=()=>{
  setCounter(counter-1);
}

  return (
    <>
    <h1>Hello world</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Increment</button>
    <br/>
    <button onClick={lossvalue}>Decrement</button>
    </>
  )
}

export default App
