import { render, screen } from '@testing-library/react';
import GrandchildTest from './GrandchildTest.js';

test('renders GrandchildTest with title', () => {
  render(<GrandchildTest />);

  const title = screen.getByText(/GrandchildTest/i);
  expect(title).toBeInTheDocument();
});
