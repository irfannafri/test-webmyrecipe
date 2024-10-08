import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

test('renders the component Navbar', () => {
  render(<NavBar search={() => {}} />); 

  // Navbar title
  const title = screen.getByTestId('my-recipe');
  expect(title).toHaveTextContent('My Recipe');

  // search form
  const form = screen.getByTestId('form-search');
  expect(form).toBeInTheDocument();

});
