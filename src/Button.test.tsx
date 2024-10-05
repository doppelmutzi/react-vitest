// src/components/Button.test.tsx
import { render, fireEvent } from '@testing-library/react';
import { vi, test, expect } from "vitest";
import Button from './Button';

test('Button renders with correct text and handles click', () => {
  const handleClick = vi.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);

  const button = getByText('Click Me');
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});