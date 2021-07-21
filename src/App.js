import React from 'react';
import '../src/components/Header.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <p>42 is the answer to everything...</p>
      </div>
    </div>
  );
}

export default App;
