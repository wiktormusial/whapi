import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface Cities {
  city: string;
  temp: number;
}

interface State {
  cities: Cities[];
}

const initialState = {
  cities: [],
} as State;

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<Cities>) => {
      state.cities.push(action.payload);
    },
  },
});

export const { addCity } = citiesSlice.actions

export const selectCities = (state: RootState) => state.cities;

export default citiesSlice.reducer;
