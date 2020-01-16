import React from 'react';

const Scoreboard = props => {
    return (
        <div className="scoreboard-container">
            <div className="balls">
                Balls: {props.balls}
            </div>
            <div className="strikes">
                Strikes: {props.strikes}
            </div>
            <div className="fouls">
                Fouls: {props.fouls}
            </div>
        </div>
    );
}

export default Scoreboard;