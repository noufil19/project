// Import the necessary functions from the 'react-testing-library' and the component to be tested
import { render, screen } from '@testing-library/react';
import App from './App';

// Define a test named 'renders learn react link'
test('renders learn react link', () => {
    // Render the App component in a virtual DOM
  render(<App />);
    // Use the screen object's 'getByText' function to find an element with the text 'learn react'
  const linkElement = screen.getByText(/learn react/i);
    // Expect that the found element is present in the document
  expect(linkElement).toBeInTheDocument();
});
