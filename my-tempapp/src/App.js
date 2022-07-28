import React, {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCount] = useState(10);
  const [tempColor, setTempColor] = useState('cold')
  const increaseTemp = () => {
    const newTemp = counter + 1;
    if(newTemp > 15)
    {setTempColor("hot")}
    setCount(newTemp)
  }
  const decreaseTemp = () => {
    const newTemp = counter - 1;
    if(newTemp <= 15)
    {setTempColor("cold")}
    setCount(newTemp)
  }
  return (
    <div className={`${tempColor}`}>
      <h1>{counter}</h1>
      <button onClick={() =>increaseTemp()}>+</button>
      <button onClick={() =>decreaseTemp()}>-</button>
    </div>
  );
}

export default App;
