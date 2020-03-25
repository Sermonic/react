import React from 'react';
import './App.css';
import Dog from './Dog';

function App() {
  return (
    <div className="App">
      <Dog />
      <div>I AM ANOTHER DIV, NOT IN DOG COMPONENT</div>
    </div>
  );
}

export default App;
