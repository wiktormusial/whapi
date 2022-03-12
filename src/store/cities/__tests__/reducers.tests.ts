import reducer, { addCity } from "../citiesSlice";

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
