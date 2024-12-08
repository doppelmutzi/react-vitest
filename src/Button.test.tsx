import { render, fireEvent } from '@testing-library/react';
import { vi, describe, test, expect } from "vitest";
import Button from './Button';

describe('Button', () => {
  test('renders with correct text and handles click', () => {
    const handleClick = vi.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
    
    const button = getByText('Click Me');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('matches snapshot', () => {
    const handleClick = vi.fn();
    const { container } = render(<Button onClick={handleClick}>Click Me</Button>);
    expect(container).toMatchSnapshot();
  });
});