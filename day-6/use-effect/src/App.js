import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [value, setValue] = useState(95);

  // useEffect(setup => function, dependencies => [])
  // useEffect(() => {
  //   console.log("useEffect 1");
  // }, [])

  /**
   * 1 - 1 in progress 
   * 2 - 1 in progress
   * 5 - 1 
   */
  useEffect(() => {
    console.log("useEffect 2");
    let interval = setInterval(() => {
        handleClick()
    }, 1000)
    return () => { // componentWillUnmount
      console.log("componentWillUnmount");
      clearInterval(interval);
    }
  })

  const handleClick = () => {
    setValue(oldValue =>  oldValue + 1)
  }

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
