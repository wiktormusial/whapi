import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface State {
  city: string;
  temp: number;
}

const initialState: Array<State> | [] = [];

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
});

export const selectCities = (state: RootState) => state.cities;

export default citiesSlice.reducer;
