import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [redo, setRedo] = useState([]);

  const handleClick = (event) => {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY,
    };
    console.log(list);
    setList((prev) => [...prev, newDot]);
    setRedo([]);
  };

  const handleUndo = (event) => {
    event.stopPropagation();

    if (list.length === 0) {
      return;
    }

    const lastItem = list[list.length - 1];
    setRedo((prev) => [...prev, lastItem]);

    setList((prev) => {
      const newArr = [...prev].slice(0, -1);

      return newArr;
    });
  };

  const handleRedo = (event) => {
    event.stopPropagation();

    if (redo.length === 0) {
      return;
    }

    const recoveredDot = redo[redo.length - 1];

    setRedo((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
    setList((prev) => [...prev, recoveredDot]);
  };

  return (
    <>
      <div className='box' onClick={handleClick}>
        <button onClick={handleUndo}>Desfazer</button>
        <button onClick={handleRedo}>Refazer</button>
        {list.map((item, index) => (
          <span
            key={index}
            className='dot'
            style={{ left: item.clientX, top: item.clientY }}
          />
        ))}
      </div>
    </>
  );
}

export default App;
