import { expect, test, vi } from "vitest";
import App from "../src/App";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import * as quoteService from "./quote.service";

vi.mock("./quote.service", () => ({
  fetchQuote: vi.fn().mockResolvedValue({
    id: 1,
    quote: "This is a test quote",
    author: "Test Author",
  }),
}));

test("renders quote after fetching", async () => {
  // const mockQuote = {
  //     id: 1,
  //     quote: "This is a test quote",
  //     author: "Test Author",
  //   };
  //   vi.mocked(quoteService.fetchQuote).mockResolvedValue(mockQuote);

  const { container, getByText } = render(<App />);
  expect(container).toMatchSnapshot();

  // Wait for the quote to be fetched and rendered
  await waitFor(() => expect(getByText("This is a test quote")).toBeDefined());

  const button = screen.getByText("count is 0");
  fireEvent.click(button);
  expect(container).toMatchSnapshot();
});
