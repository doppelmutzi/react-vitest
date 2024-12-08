import { describe, expect, test } from "vitest";
import App from "../src/App";
import { fireEvent, render, screen } from "@testing-library/react";

describe("App", () => {
  test("renders headline", () => {
    render(<App />);
    const button = screen.getByText("count is 0");
    fireEvent.click(button);
    expect(screen.getByText("count is 1")).toBeDefined();
    fireEvent.click(button);
    expect(screen.getByText("count is 2")).toBeDefined();
  });

  test("matches snapshot", () => {
    const { container, getByText } = render(<App />);
    expect(container).toMatchSnapshot();
    const button = getByText("count is 0");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
});
