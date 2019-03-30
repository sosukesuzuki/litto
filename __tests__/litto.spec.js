"use strict";

const litto = require("../src/litto").litto;

describe("litto", () => {
  test("convert list to checklist", () => {
    const content = "- item1\n- item2\n- item3\n";
    const result = litto(content);
    expect(result).toBe("-   [ ] item1\n-   [ ] item2\n-   [ ] item3\n");
  });
  test("convert list in list to checklist in checklist", () => {
    const content = "- item1\n  - subitem1\n  - subitem2\n";
    const result = litto(content);
    expect(result).toBe(
      "-   [ ] item1\n    -   [ ] subitem1\n    -   [ ] subitem2\n"
    );
  });
  test("convert list to checklist with prettier", () => {
    const content = "- item1\n- item2\n- item3\n";
    const result = litto(content, { withFormat: true });
    expect(result).toBe("- [ ] item1\n- [ ] item2\n- [ ] item3\n");
  });
});
