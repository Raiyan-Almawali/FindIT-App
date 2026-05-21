import { describe, it, expect } from "vitest";
 
import reducer from "../../Features/JobsSlice";
 
const initialState = {
  jobs: [],
  status: "idle",
  isLoading: false,
  isSuccess: false,
  isError: false
};
 
describe("testing JobsSlice", () => {
 
  it("should return initial state", () => {
 
    expect(
      reducer(undefined, { type: undefined })
    ).toEqual(initialState);
 
  });
 
});