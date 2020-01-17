import React from 'react';

const Scoreboard = props => {
    return (
        <div className="scoreboard-container">
            <div className="balls" data-testid="ballsCount">
                Balls: {props.balls}
            </div>
            <div className="strikes" data-testid="strikesCount">
                Strikes: {props.strikes}
            </div>
            <div className="fouls" data-testid="foulsCount">
                Fouls: {props.fouls}
            </div>
        </div>
    );
}

export default Scoreboard;