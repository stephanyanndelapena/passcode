import { useState } from 'react';
import './App.css';

function App() {
  const [systemPIN, setSystemPIN] = useState('1234567890');
  const [input, setInput] = useState('');
  const [display, setDisplay] = useState('INPUT CODE');
  const [mode, setMode] = useState('NORMAL');


  const handleNumberClick = (num) => {
    const newInput = input + num;
    setInput(newInput);
    setDisplay(newInput);
  };

  const handleEnter = () => {
    if (mode === 'NORMAL') {
      if (input === systemPIN) {
        setDisplay('OPEN');
      } else {
        setDisplay('LOCKED');
      }
      setInput('');
    } else if (mode === 'VERIFY_CURRENT') {
      if (input === systemPIN) {
        setDisplay('ENTER NEW CODE');
        setMode('ENTER_NEW');
        setInput('');
      } else {
        setDisplay('INVALID CODE');
        setInput('');
      }
    } else if (mode === 'ENTER_NEW') {
      if (input.length >= 8) {
        setSystemPIN(input);
        setDisplay('CHANGE CODE SUCCESSFUL');
        setMode('NORMAL');
        setInput('');
      } else {
        setDisplay('CODE SHOULD BE 8 DIGITS');
        setInput('');
      }
    }
  };

  const handleReset = () => {
    setInput('');
    setDisplay('INPUT CODE');
    setMode('NORMAL');
  };

  const handlePIN = () => {
    setDisplay('ENTER CURRENT CODE');
    setMode('VERIFY_CURRENT');
    setInput('');
  };

  const handleName = () => {
    setDisplay('STEPHANY ANN DELA PENA');
  };

  const handleSubj = () => {
    setDisplay('CPEITEL3');
  };

  return (
    <div className="app">
      <div className="lockerContainer">
        
        <div className="lockerDisplay">
          {display}
        </div>

        <div className="lockerButtonsContainer">
          <button className="lockerButton" onClick={() => handleNumberClick('7')}>7</button>
          <button className="lockerButton" onClick={() => handleNumberClick('8')}>8</button>
          <button className="lockerButton" onClick={() => handleNumberClick('9')}>9</button>
          <button className="lockerButton" onClick={() => handleNumberClick('4')}>4</button>
          <button className="lockerButton" onClick={() => handleNumberClick('5')}>5</button>
          <button className="lockerButton" onClick={() => handleNumberClick('6')}>6</button>
          <button className="lockerButton" onClick={() => handleNumberClick('1')}>1</button>
          <button className="lockerButton" onClick={() => handleNumberClick('2')}>2</button>
          <button className="lockerButton" onClick={() => handleNumberClick('3')}>3</button>
          <button className="lockerButton" onClick={handleReset}>RESET</button>
          <button className="lockerButton" onClick={() => handleNumberClick('0')}>0</button>
          <button className="lockerButton" onClick={handleEnter}>ENTER</button>
          <button className="lockerButton" onClick={handleName}>NAME</button>
          <button className="lockerButton" onClick={handleSubj}>SUBJ</button>
          <button className="lockerButton" onClick={handlePIN}>PIN</button>
        </div>
      </div>
    </div>
  );
}

export default App;