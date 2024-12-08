import { Quote } from "./quote.service";

export async function displayQuote(
  fetchQuote: () => Promise<Quote>
): Promise<Quote> {
  const quote = await fetchQuote();
  return quote;
}
