import { configureStore } from "@reduxjs/toolkit";
import { registerFormReducer } from "./slice/register-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      registerForm: registerFormReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
