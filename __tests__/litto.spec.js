"use strict";

const litto = require("../src/litto").litto;

describe("litto", () => {
  test("identify", () => {
    const formatted = litto("hoge");
    expect(formatted).toBe("hoge");
  });
});
