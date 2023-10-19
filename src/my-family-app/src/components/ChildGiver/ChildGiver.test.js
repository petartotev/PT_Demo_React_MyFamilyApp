import { render, screen } from '@testing-library/react';
import ChildGiver from './ChildGiver.js';

test('renders ChildGiver with title', () => {
  render(<ChildGiver />);

  const title = screen.getByText(/ChildGiver/i);
  expect(title).toBeInTheDocument();
});
