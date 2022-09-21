import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-box"
  })
  return (
    <div className="App">
      <div className="BOX box1">
        <div className="innerbox"></div>
      </div>
    </div>
  );
}

export default App;
