import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Scoreboard from "./components/Scoreboard";
import Dashboard from "./components/Dashboard";

test('App renders without crashing', () => {
  render(<App />)
});

test("Scoreboard renders without crashing", () => {
  render(<Scoreboard />)
})

test("User Dashboard renders without crashing", () => {
  render(<Dashboard />)
})

test("Ball, strike, and foul count are rendered", () => {
  const { getByTestId } = render(<App />);

  getByTestId(/ballsCount/i);
  getByTestId(/strikesCount/i);
  getByTestId(/foulsCount/i);
})

test("Increase ball, increase strike, and increase foul buttons are rendered", () => {
  const { getByTestId } = render(<App />);

  getByTestId(/increaseBallButton/i);
  getByTestId(/increaseStrikeButton/i);
  getByTestId(/increaseFoulButton/i);
  getByTestId(/hitButton/i);
})

test("Status message <p> and it's parent <div> are rendered", () => {
  const { getByTestId } = render(<App />);

  getByTestId(/statusMessageDiv/i);
  getByTestId(/statusMessageP/i);
})