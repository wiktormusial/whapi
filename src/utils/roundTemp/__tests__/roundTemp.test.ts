import roundTemp from "../roundTemp";

it("10.56 should be 10.6", () => {
  expect(roundTemp(10.56)).toBe("10.6");
});

it("10.99 should be 11", () => {
  expect(roundTemp(10.99)).toBe("11");
});
