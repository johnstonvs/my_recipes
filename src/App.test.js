import { render, screen } from '@testing-library/react';
import App from './App';
import LandingPage from './LandingPage';

describe('Landing Page', () => {

  test('contains a header with "My Recipes" text', async () => {
    await render(<LandingPage />);
    screen.getByRole('heading');
    await screen.findByText('My Recipes')
      .then(text => {
        let heading = screen.getByText('My Recipes');
        expect(heading).toBeInTheDocument();
      })
  })

  test('contains "There are no recipes to list" text', async () => {
    await render(<LandingPage />);
    const element = screen.getByText('There are no recipes to list');
    expect(element).toBeInTheDocument();
  })

  test('contains an "add recipe" button', async () => {
    await render(<LandingPage />);
    const header = screen.getByRole('heading');
    const button = screen.getByRole('button');
    const text = screen.getByText('Add Recipe');
    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(header.compareDocumentPosition(button)).toBe(4);
  })

})