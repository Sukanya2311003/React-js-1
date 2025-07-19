import { useEffect, useState } from "react";
import Counter from "./Counter2";

function App3() {
  const [counter, setCounter] = useState(0);
  const [d, setD] = useState(0);
  const [display, setDisplay] = useState('true');

  useEffect(() => {
    callonce(); // run only once
  }, []);

  useEffect(() => {
    counterFunction(); // run only when counter changes
  }, [counter]);

  function counterFunction() {
    console.log("counterFunction", counter);
  }

  function callonce() {
    console.log("CallOnce fn called", counter);
  }

  return (
    <div className="container">
      <h3>UseEffect Hooks</h3>
      {
        display? <Counter count={counter} d={d} />:null
      }
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={() => setD(d + 1)}>D {d}</button>
      <button onClick={() => setDisplay(!display)}>Toggle </button>


      <Counter count={counter} d={d} />
    </div>
  );
}

export default App3;
