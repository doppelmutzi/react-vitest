import { describe, it, expect, vi } from "vitest";
import { displayQuote } from "./quote-consumer";
import * as quoteService from "./quote.service";
import type { Quote } from "./quote.service";

export async function fetchQuoteFake() {
  return { id: 1, quote: "This is a fake quote.", author: "Fake Author" };
}

describe("displayQuote", () => {
  it("should return a formatted fake quote using the fake service", async () => {
    const result = await displayQuote(fetchQuoteFake);
    expect(result.quote).toBe("This is a fake quote.");
  });

  it("should return a formatted quote using a stub", async () => {
    const fetchQuoteStub = vi.fn().mockResolvedValue("This is a stubbed quote");

    const result = await displayQuote(fetchQuoteStub);

    expect(result).toBe("This is a stubbed quote");
    expect(fetchQuoteStub).toHaveBeenCalled();
  });

  it("should call fetchQuote from quoteService internally", async () => {
    const fetchSpy = vi.spyOn(quoteService, "fetchQuote");
    await displayQuote(fetchSpy as unknown as () => Promise<Quote>);

    expect(fetchSpy).toHaveBeenCalled();
    expect(vi.isMockFunction(quoteService.fetchQuote)).toBe(true);

    // Restore the original implementation
    fetchSpy.mockRestore();
    expect(vi.isMockFunction(quoteService.fetchQuote)).toBe(false);
  });
});
