import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(9);

  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }

    // setCount((prevCount)=>prevCount + 1);
    // setCount((prevCount)=>prevCount + 1);
    // setCount((prevCount)=>prevCount + 1);
    // setCount((prevCount)=>prevCount + 1);
  };
  const subsValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {/* {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add{" "}
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Subtract
      </button> */}
      {count}
      <button onClick={addValue}>Add </button>
      <button onClick={subsValue}>Subtract</button>
    </>
  );
}

export default App;
