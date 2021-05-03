import {useCustom} from "../hooks/useCustom";

const [balls, setBalls, strikes, setStrikes, fouls, setFouls, message, setMessage] = useCustom();

export const increaseBall = () => {
    if (balls <3){
      setBalls(balls+1);
      setMessage("Ball!");
    }else {
      clearBoard();
      setMessage("Ball 4! player moved to first base. next hitter up to bat!")
    }
  }

export const increaseStrike = () => {
    if (strikes <2){
      setMessage("Strike!");
      setStrikes(strikes+1);
    }else {
      clearBoard();
      setMessage("Strike 3! Player struck out! next hitter up to bat!")
    }
  }

export const increaseFoul = () => {
    setFouls(fouls+1);
    if (strikes<2){
      increaseStrike();
    }
    setMessage("Foul!")
  }

export const clearBoard = () => {
    setBalls(0);
    setFouls(0);
    setStrikes(0);
  }

 export const hit = () => {
    clearBoard();
    setMessage("Player hit the ball! Next player up to bat!");
  }