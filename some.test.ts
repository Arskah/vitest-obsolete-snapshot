import { describe, expect, it } from "vitest";
import { other, some } from "./some";

describe("some", () => {
  it("matches snapshost", () => {
    expect(some()).toMatchSnapshot();
  });
});

describe("other", () => {
  it("matches snapshost", () => {
    expect(other()).toMatchSnapshot();
  });
});
