import React, {useState} from 'react';
import Dashboard from "./components/Dashboard";
import Scoreboard from "./components/Scoreboard";
import './App.css';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);

  const increaseBall = () => {
    setBalls(balls+1);
    console.log("increase ball button clicked")
  }

  const increaseStrike = () => {
    setStrikes(strikes+1);
    console.log("increase strike button clicked")
  }

  const increaseFoul = () => {
    setFouls(fouls+1);
    console.log("increase foul button clicked")
  }

  const hit = () => {
    setBalls(0);
    setFouls(0);
    setStrikes(0);
    console.log("hit button clicked. balls, fouls, and strikes reset to 0")
  }

  return (
    <div className="App">
      <Scoreboard balls={balls} strikes={strikes} fouls={fouls}/>
      <Dashboard increaseBall={increaseBall} increaseStrike={increaseStrike} increaseFoul={increaseFoul} hit={hit}/>
    </div>
  );
}

export default App;
