import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import type { RootState } from "../store";
import getCityTemp from "../../api/getCityTemp";

interface Cities {
  id?: number;
  city: string;
  temp: number;
}

interface State {
  error: null | SerializedError;
  cities: Cities[];
}

export const fetchCity = createAsyncThunk(
  "cities/getCityTemp",
  async (city: string) => {
    return await getCityTemp(city);
  }
);

const initialState: State = {
  cities: [],
  error: null,
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<Cities>) => {
      const id =
        state.cities.reduce((maxId, city) => Math.max(city.id!, maxId), -1) + 1;

      state.cities.push({
        id: id,
        city: action.payload.city,
        temp: action.payload.temp,
      });
    },
    createError: (state, action: PayloadAction<string>) => {
      state.error = {
        message: action.payload,
      };
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCity.fulfilled, (state, action) => {
      const id =
        state.cities.reduce((maxId, city) => Math.max(city.id!, maxId), -1) + 1;
      const cityName = action.payload.name;
      const temp = action.payload.main.temp;

      if (state.error) {
        state.error = null;
      }

      state.cities.push({ id: id, city: cityName, temp: temp });
    });
    builder.addCase(fetchCity.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export const { addCity, createError, clearError } = citiesSlice.actions;

export const selectCities = (state: RootState) => state.cities.cities;
export const selectError = (state: RootState) => state.cities.error?.message;

export default citiesSlice.reducer;
