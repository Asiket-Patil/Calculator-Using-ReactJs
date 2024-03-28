import Buttons from './compoents/Buttons'
import Display from './compoents/Display';
import './App.css'
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const handleResult =(buttonText)=>{
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className="App">
      <Display displayValue={calVal}></Display>
      <Buttons onButtonClick={handleResult}></Buttons>
    </div>
  );
}

export default App;
