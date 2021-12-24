const sum = require("../src/sum");

it("should return correct dsum", () => {
  const result = sum(2, 5);
  expect(result).toBe(7);
});
