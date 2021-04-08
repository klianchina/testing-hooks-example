// simple test with ReactDOM
// http://localhost:3000/counter
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../examples/counter'
import {render, fireEvent, screen} from '@testing-library/react'

/* Using React DOM render */
test('counter increments when the button is clicked', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  ReactDOM.render(<Counter />, div)
  const [decrement, increment] = div.querySelectorAll('button')
  const message = div.firstChild.querySelector('div')

  expect(message.textContent).toBe('Current count: 0')
  increment.click()
  expect(message.textContent).toBe('Current count: 1')
  decrement.click()
  expect(message.textContent).toBe('Current count: 0')

  document.body.removeChild(div)
})

/* With @testing-library/react */
test('counter increments when the button is clicked with testing-library', () => {
  const {container, debug} = render(<Counter />);

  const [decrement, increment] = container.querySelectorAll('button');
  const message = container.firstChild.querySelector('div');

  // debug();
  // screen.debug();

  expect(message.textContent).toBe('Current count: 0');

  fireEvent.click(increment);
  expect(message.textContent).toBe('Current count: 1');
  fireEvent.click(decrement);
  expect(message.textContent).toBe('Current count: 0');
})
