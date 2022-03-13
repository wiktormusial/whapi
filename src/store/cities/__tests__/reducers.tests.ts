import reducer, { addCity, createError, deleteCity } from "../citiesSlice";

it("addCity is adding city", () => {
  expect(reducer(undefined, {})).toEqual({
    cities: [],
    error: null,
  });
});

it("addCity is adding city", () => {
  const previuosState = { error: null, cities: [] };
  expect(
    reducer(previuosState, addCity({ city: "Katowice", id: 0, temp: 15 }))
  ).toEqual({
    cities: [{ id: 0, city: "Katowice", temp: 15 }],
    error: null,
  });
});

it("createError creates Error", () => {
  const previuosState = { error: null, cities: [] };
  expect(reducer(previuosState, createError("Blank input"))).toEqual({
    cities: [],
    error: { message: "Blank input" },
  });
});

it("deleteCity deletes City", () => {
  const previuosState = {
    error: null,
    cities: [{ city: "Katowice", id: 0, temp: 15 }],
  };
  expect(reducer(previuosState, deleteCity(0))).toEqual({
    error: null,
    cities: [],
  });
});
