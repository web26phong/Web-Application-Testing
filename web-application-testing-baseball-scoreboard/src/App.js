import React, {useState} from 'react';
import Dashboard from "./components/Dashboard";
import Scoreboard from "./components/Scoreboard";
import './App.css';

function App() {
  const initialMessage = "A new player at bat.";
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [message, setMessage] = useState(initialMessage);

 const increaseBall = () => {
    if (balls <3){
      setBalls(balls+1);
      setMessage("Ball!");
    }else {
      clearBoard();
      setMessage("Ball 4! player moved to first base. next hitter up to bat!")
    }
  }

  const increaseStrike = () => {
    if (strikes <2){
      setMessage("Strike!");
      setStrikes(strikes+1);
    }else {
      clearBoard();
      setMessage("Strike 3! Player struck out! next hitter up to bat!")
    }
  }

  const increaseFoul = () => {
    setFouls(fouls+1);
    if (strikes<2){
      increaseStrike();
    }
    setMessage("Foul!")
  }

  const clearBoard = () => {
    setBalls(0);
    setFouls(0);
    setStrikes(0);
  }

  const hit = () => {
    clearBoard();
    setMessage("Player hit the ball! Next player up to bat!");
  }

  return (
    <div className="App">
      <div>
        <p>{message}</p>
      </div>
      <Scoreboard balls={balls} strikes={strikes} fouls={fouls}/>
      <Dashboard increaseBall={increaseBall} increaseStrike={increaseStrike} increaseFoul={increaseFoul} hit={hit}/>
    </div>
  );
}

export default App;
