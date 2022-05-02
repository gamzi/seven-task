import { render, screen, within } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

test('renders show cards', () => {
  render(<App />);

  const cardList = screen.getAllByRole('listitem', {name: 'show-card'});

  expect(cardList.length).toBeGreaterThan(0);
});

test('clicking list card opens the side panel', () => {
  render(<App />);

  const cardList = screen.getAllByRole('listitem', {name: 'show-card'});
  const sidePanel = screen.getByLabelText('side-panel');

  userEvent.click(cardList[0]);

  expect(sidePanel).not.toHaveStyle(`right: 100%`);
});

test('clicking panel card closes side panel', () => {
  render(<App />);

  const cardList = screen.getAllByRole('listitem', {name: 'show-card'});
  const sidePanel = screen.getByLabelText('side-panel');
  
  userEvent.click(cardList[0]);

  const panelCard = within(sidePanel).getByLabelText('show-card');

  userEvent.click(panelCard);

  expect(sidePanel).toHaveStyle(`right: 100%`);
});
