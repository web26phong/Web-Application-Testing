import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
               <button data-testid="increaseBallButton" onClick={() => this.props.increaseBall()}>Increase Ball</button>
               <button data-testid="increaseStrikeButton" onClick={() => this.props.increaseStrike()}>Increase Strike</button>
               <button data-testid="increaseFoulButton" onClick={() => this.props.increaseFoul()}>Increase Foul</button>
               <button data-testid="hitButton" onClick={() => this.props.hit()}>Player Hit the Ball</button>
            </div>
        );
    }
}

export default Dashboard;