import { describe, it, expect, vi } from "vitest";

function processCallback(callback: (arg: string) => string, arg: string) {
  return callback(arg);
}

describe("Standalone mock function with vi.fn", () => {
  it("should return a predefined value", () => {
    const mockCallback = vi.fn().mockReturnValue("mocked value");

    const result = processCallback(mockCallback, "test");

    expect(result).toBe("mocked value");
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith("test");
  });
});
