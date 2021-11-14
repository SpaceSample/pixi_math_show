import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pixi Math Show', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pixi Math Show/i);
  expect(linkElement).toBeInTheDocument();
});
