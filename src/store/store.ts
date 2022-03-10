import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import citiesReducers from "./cities/citiesSlice";

export const store = configureStore({
  reducer: {
    cities: citiesReducers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
