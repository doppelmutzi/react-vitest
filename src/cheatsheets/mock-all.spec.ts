import { describe, it, expect, vi } from "vitest";
import * as myModule from "./myModule";

// Automatically mock all exports of the module
vi.mock("./myModule");

describe("Automatic mocking with vi.mock", () => {
  it("should mock all functions in the module", () => {
    // Verify that the functions are mock functions
    expect(vi.isMockFunction(myModule.myFunction)).toBe(true);
    expect(vi.isMockFunction(myModule.anotherFunction)).toBe(true);

    // Call the mocked functions
    myModule.myFunction("test");
    myModule.anotherFunction();

    // Verify that the functions were called
    expect(myModule.myFunction).toHaveBeenCalledTimes(1);
    expect(myModule.myFunction).toHaveBeenCalledWith("test");
    expect(myModule.anotherFunction).toHaveBeenCalledTimes(1);
  });
});
