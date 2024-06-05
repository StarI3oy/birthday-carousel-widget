import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Employee card', () => {
  it('Has image', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('Has text area', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
})