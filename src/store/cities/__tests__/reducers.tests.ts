import reducer, { addCity } from "../citiesSlice";

it("on init Initialstate is empty", () => {
  expect(reducer(undefined, {})).toEqual({
    cities: [],
  });
});

it("addCity is adding city", () => {
  expect(reducer(undefined, addCity({ city: "Katowice", temp: 15 }))).toEqual({
    cities: [{ city: "Katowice", temp: 15 }],
  });
});
