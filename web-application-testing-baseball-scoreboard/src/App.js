import React from 'react';
import Dashboard from "./components/Dashboard";
import Scoreboard from "./components/Scoreboard";
import './App.css';

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <Dashboard />
    </div>
  );
}

export default App;
