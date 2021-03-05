import { render, screen, configure, fireEvent } from '@testing-library/react';
import App from './App';

configure({ testIdAttribute: 'data-test-id' })

test('initial value equals 0', () => {
  render(<App />);

  expect(screen.getByTestId('value')).toHaveTextContent('0');
});


test('value equals 1', () => {
  render(<App />);

  fireEvent.click(screen.getByTestId('button-add'))

  expect(screen.getByTestId('value')).toHaveTextContent('1');
});

test('value equals -1', () => {
  render(<App />);

  fireEvent.click(screen.getByTestId('button-subtract'))

  expect(screen.getByTestId('value')).toHaveTextContent('1');
});
