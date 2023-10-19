import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Parent', () => {
  render(<App />);
  const linkElement = screen.getByText(/Parent/i);
  expect(linkElement).toBeInTheDocument();
});
