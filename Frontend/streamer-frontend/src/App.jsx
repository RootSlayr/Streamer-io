import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Videoplayer from './Videoplayer';
import Chatbox from './Chatbox';

function App() {
  const [message, setMessage] = useState("Click the button to Start");

  const handleClick = () => {
    setMessage("You clicked the button");
  };

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    <div style={{ display: "flex", gap: "200px" }}>
      <h1>This the Title card</h1>
      {/* <p>{message}</p>
      <button onClick={handleClick}>Click me</button> */}
      <Videoplayer />
      <Chatbox />
    </div>
  )
}

export default App
