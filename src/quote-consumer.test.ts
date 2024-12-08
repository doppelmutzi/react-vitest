import { describe, it, expect, vi } from "vitest";
import { displayQuote } from "./quote-consumer";
import * as quoteService from "./quote.service";
import type { Quote } from "./quote.service";

export async function fetchQuoteFake() {
  return { id: 1, quote: "This is a fake quote.", author: "Fake Author" };
}

describe("displayQuote with fake service", () => {
  it("should return a formatted fake quote", async () => {
    const result = await displayQuote(fetchQuoteFake);
    expect(result.quote).toBe("This is a fake quote.");
  });

  it("should return a formatted fake quote (using a spy)", async () => {
    const fetchQuoteSpy = vi.spyOn(quoteService, "fetchQuote");
    await displayQuote(fetchQuoteSpy as unknown as () => Promise<Quote>);
    expect(fetchQuoteSpy).toHaveBeenCalled();
  });
});
