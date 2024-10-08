import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const el = {
  image: 'https://via.placeholder.com/150',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  id: 1
};

test('renders the component Card & given props', () => {
  render(<Card el={el} />);

  // image banner 
  const img = screen.getByTestId(`img-recipe-${el.id}`);
  expect(img).toHaveAttribute('alt', el.name);
  expect(img).toHaveAttribute('src', el.image);

  // image title
  const title = screen.getByTestId(`title-recipe-${el.id}`);
  expect(title.innerHTML).toBe(el.name);

  // image rating
  const rating = screen.getByTestId(`rating-recipe-${el.id}`);
  expect(rating.innerHTML).toBe(el.rating.toString());

  // image tags
  const tags = screen.getAllByTestId(/tag-recipe-/);
  expect(tags.length).toBe(2); // Check that two tags are rendered
  expect(tags[0].innerHTML).toBe('Tag1');
  expect(tags[1].innerHTML).toBe('Tag2');

  // image link
  const link = screen.getByTestId(`link-recipe-${el.id}`);
  expect(link).toHaveAttribute('href', `https://dummyjson.com/recipes/${el.id}`);
});
