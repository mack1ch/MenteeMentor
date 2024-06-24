import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IStoreRegister {
  userName?: string;
  userPhone?: string;
  userPassword?: string;
  userSubjects?: number[];
  userLanguages?: number[];
}

const initialState: IStoreRegister = {
  userName: undefined,
  userPhone: undefined,
  userPassword: undefined,
  userSubjects: undefined,
  userLanguages: undefined,
};

export const registerForm = createSlice({
  name: "registerForm",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string | undefined>) => {
      state.userName = action.payload;
    },
    setUserPhone: (state, action: PayloadAction<string | undefined>) => {
      state.userPhone = action.payload;
    },
    setUserPassword: (state, action: PayloadAction<string | undefined>) => {
      state.userPassword = action.payload;
    },
    setUserSubjects: (state, action: PayloadAction<number[] | undefined>) => {
      state.userSubjects = action.payload;
    },
    setUserLanguages: (state, action: PayloadAction<number[] | undefined>) => {
      state.userLanguages = action.payload;
    },
    resetStore: (state) => {
      state.userName = initialState.userName;
      state.userLanguages = initialState.userLanguages;
      state.userPassword = initialState.userPassword;
      state.userPhone = initialState.userPhone;
      state.userSubjects = initialState.userSubjects;
    },
  },
});

export const {
  setUserName,
  resetStore,
  setUserPhone,
  setUserSubjects,
  setUserLanguages,
  setUserPassword,
} = registerForm.actions;
export const registerFormReducer = registerForm.reducer;
