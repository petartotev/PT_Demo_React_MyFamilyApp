import { render, screen } from '@testing-library/react';
import ChildReceiver from './ChildReceiver.js';

test('renders ChildReceiver when missing parentResult and childGiverValue', () => {
  render(<ChildReceiver />);

  const title = screen.getByText(/ChildReceiver/i);
  expect(title).toBeInTheDocument();

  const activityTitle = screen.queryByText(/Activity received from Parent:/i);
  expect(activityTitle).toBeNull();

  const randomNumberTitle = screen.queryByText(/Random number received from ChildGiver:/i);
  expect(randomNumberTitle).toBeNull();
});

test('renders ChildReceiver with valid parentResult and childGiverValue', () => {
    render(<ChildReceiver parentResult="Research a topic you're interested in!" childGiverValue={1998} />);

    const title = screen.getByText(/ChildReceiver/i);
    expect(title).toBeInTheDocument();

    const activityTitle = screen.getByText(/Activity received from Parent:/i);
    expect(activityTitle).toBeInTheDocument();
    const activityFromParent = screen.getByText(/Research a topic you're interested in!/i);
    expect(activityFromParent).toBeInTheDocument();

    const randomNumberTitle = screen.queryByText(/Random number received from ChildGiver:/i);
    expect(randomNumberTitle).toBeInTheDocument();
    const randomNumberFromChildGiver = screen.getByText(/1998/i);
    expect(randomNumberFromChildGiver).toBeInTheDocument();
  });
