import { describe, it, expect } from "vitest";
 
import reducer from "../../Features/UserSlice";
 
const test_state = {
  user: {},
  message: "",
  isLoading: false,
  isSuccess: false,
  isError: false
};
 
describe("testing UserSlice", () => {
 
  it("testing initial state", () => {
 
    expect(
      reducer(undefined, { type: undefined })
    ).toEqual(test_state);
 
  });
});