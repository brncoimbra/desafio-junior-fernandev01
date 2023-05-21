import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const handleClick = (event) => {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY,
    };

    setList((prev) => [...prev, newDot]);
  };

  return (
    <>
      <div className='box' onClick={handleClick}>
        {JSON.stringify(list)}
        <span className='dot' />
      </div>
    </>
  );
}

export default App;
