import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const handleClick = (event) => {
    const { clientX, clientY } = event;
  };
  return (
    <>
      <div className='box' onClick={handleClick}></div>
    </>
  );
}

export default App;
