import reducer, { addCity, createError } from "../citiesSlice";

it("addCity is adding city", () => {
  expect(reducer(undefined, {})).toEqual({
    cities: [],
    error: null,
  });
});

it("addCity is adding city", () => {
  const previuosState = { error: null, cities: [] };
  expect(
    reducer(previuosState, addCity({ city: "Katowice", temp: 15 }))
  ).toEqual({
    cities: [{ city: "Katowice", temp: 15 }],
    error: null,
  });
});

it("createError creates Error", () => {
  const previuosState = { error: null, cities: [] };
  console.log('test')
  expect(reducer(previuosState, createError("Blank input"))).toEqual({
    cities: [],
    error: { message: "Blank input" },
  });
});
