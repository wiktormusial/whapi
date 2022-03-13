import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import type { RootState } from "../store";
import getCityTemp from "../../api/getCityTemp";

export interface Cities {
  id: number;
  city: string;
  temp: number;
  country: string;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  wind_speed: number;
  description: string;
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
      state.cities.push({
        ...action.payload,
      });
    },
    deleteCity: (state, action: PayloadAction<number>) => {
      state.cities = state.cities.filter((item) => item.id !== action.payload);
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

      const { name } = action.payload;
      const { feels_like, temp, temp_max, temp_min } = action.payload.main;
      const { country } = action.payload.sys;
      const { speed } = action.payload.wind;

      if (state.error) {
        state.error = null;
      }

      state.cities.push({
        id: id,
        city: name,
        temp: temp,
        description: action.payload.weather[0].description,
        country: country,
        temp_min: temp_min,
        temp_max: temp_max,
        feels_like: feels_like,
        wind_speed: speed,
      });
    });
    builder.addCase(fetchCity.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export const { addCity, deleteCity, createError, clearError } =
  citiesSlice.actions;

export const selectCities = (state: RootState) => state.cities.cities;
export const selectCityById = (state: RootState, Id: number) => {
  return state.cities.cities.find((item) => item.id === Id);
};
export const selectError = (state: RootState) => state.cities.error?.message;

export default citiesSlice.reducer;
