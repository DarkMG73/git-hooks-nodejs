const mult = require("../src/mult");

it("Testing multipication", () => {
  const result = mult(2, 5);
  expect(result).toBe(10);
});
