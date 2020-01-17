import {useState} from "react";

export const useCustom = () => {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [message, setMessage] = useState("A new player at bat.");
  
    return [balls, setBalls, strikes, setStrikes, fouls, setFouls, message, setMessage]
  }