import { describe, expect, it } from "vitest";

describe("CI env", () => {
  it("equals true", () => {
    expect(import.meta.env.CI).toEqual("true");
  });
});
