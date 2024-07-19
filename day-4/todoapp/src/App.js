// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import ParentCpt from "./component-v2/ParentCpt";
import ParentObjectCpt from "./component-v2/ParentObjectCpt";

function App() {
  const [value, setValue] = useState(0);

  const increment = (increntType) => {
    setValue(value + increntType);
    // setValue((pendingValue) => pendingValue + 1);
    // console.log(`value = ${value}`);
  }

  const decrement = () => {
    setValue(value - 1);
  }
  
  return (
    <>
      <div>
        <h5>Current value : {value}</h5>
        <button onClick={() => {
            increment(1);
          }}>Increment</button>
        <button onClick={() => {
            decrement();
        }}>decrement</button>
        <button onClick={() => {
            increment(3);
          //  increment(); // 0 => 0 + 1
          //  increment(); // 1 => 1 + 1
          //  increment(); // 2 => 2 + 1
        }}>Increment + 3</button>
      </div>

      <ParentCpt />

      <ParentObjectCpt />
    </>
  );
}

export default App;
