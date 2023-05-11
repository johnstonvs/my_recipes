import { render, screen } from '@testing-library/react';
import App from './App';
import LandingPage from './LandingPage';

describe('Landing Page', () => {

  test('contains a header with "My Recipes" text', async () => {
    render(<LandingPage />);
    screen.getByRole('heading');
    await screen.findByText('My Recipes')
      .then(text => {
        let heading = screen.getByText('My Recipes');
        expect(heading).toBeInTheDocument();
      })
  })

  test('contains "There are no recipes to list" text', async () => {
    render(<LandingPage />);
    const element = screen.getByText('There are no recipes to list');
    expect(element).toBeInTheDocument();
  })

})
