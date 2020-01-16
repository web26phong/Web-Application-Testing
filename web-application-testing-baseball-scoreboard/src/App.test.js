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