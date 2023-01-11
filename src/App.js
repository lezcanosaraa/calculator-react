
import './App.css';
import Button from './componets/Button';
import ButtonClear from './componets/ButtonClear';
import Screen from './componets/Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value)
  }
  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    }
  
  }
  return (
    <div className="App">
      <div className='wrap-calculator'>
        <Screen input={input}/>
        <div className='row'>
          <Button manejarClick= {addInput}>1</Button>
          <Button manejarClick= {addInput}>2</Button>
          <Button manejarClick= {addInput}>3</Button>
          <Button manejarClick= {addInput}>+</Button>
        </div>
        <div className='row'>
          <Button manejarClick= {addInput}>4</Button>
          <Button manejarClick= {addInput}>5</Button>
          <Button manejarClick= {addInput}>6</Button>
          <Button manejarClick= {addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manejarClick= {addInput}>7</Button>
          <Button manejarClick= {addInput}>8</Button>
          <Button manejarClick= {addInput}>9</Button>
          <Button manejarClick= {addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manejarClick= {calculateResult}>=</Button>
          <Button manejarClick= {addInput}>0</Button>
          <Button manejarClick= {addInput}>.</Button>
          <Button manejarClick= {addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear manejarClick = {() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
