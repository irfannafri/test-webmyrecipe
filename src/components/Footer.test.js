import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('renders the component Footer', () => {
  render(<Footer />);

  // footer text
  const footerText = screen.getByTestId('footer-text');
  expect(footerText).toHaveTextContent('© 2024 Company, Inc. All rights reserved.');

  // social media links
  const facebookLink = screen.getByTestId('link-facebook');
  expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');

  const xLink = screen.getByTestId('link-x');
  expect(xLink).toHaveAttribute('href', 'https://x.com');

  const instagramLink = screen.getByTestId('link-instagram');
  expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/');
});
