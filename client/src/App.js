// APP.JS
// ==============================

// IMPORT 
import React from 'react';
import './App.css';
import Header from "./Header"

// COMPONENT
function App() {
  console.log("App loaded")
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>
          Bloop
        </p>
      </header>
    </div>
  );
}

export default App;
