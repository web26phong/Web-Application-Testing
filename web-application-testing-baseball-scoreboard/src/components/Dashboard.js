import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
               <button onClick={() => this.props.increaseBall()}>Increase Ball</button>
               <button onClick={() => this.props.increaseStrike()}>Increase Strike</button>
               <button onClick={() => this.props.increaseFoul()}>Increase Foul</button>
               <button onClick={() => this.props.hit()}>Player Hit the Ball</button>
            </div>
        );
    }
}

export default Dashboard;