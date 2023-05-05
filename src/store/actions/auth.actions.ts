import * as api from "../../api";
import { openAlertMessage } from "./alert.actions";
import { NavigateFunction } from "react-router-dom";
import {
  ILoginDetails,
  IRegisterDetails,
  IUserDetails,
} from "../../protocols/auth.types";
import { isAxiosResponce } from "../../protocols/api.types";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { ISetUserDetails } from "../../protocols/authActions.types";
import { IOpenAlertMessage } from "../../protocols/alertActions.types";

export const authActions: IActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export interface IActions {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS"
}

export const getActions = (dispatch: Dispatch<ISetUserDetails | IOpenAlertMessage>) => {
  return {
    login: (userDetails: ILoginDetails, history: NavigateFunction) =>
      dispatch(login(userDetails, history)),
    register: (userDetails: IRegisterDetails, history: NavigateFunction) =>
      dispatch(register(userDetails, history)),
    setUserDetails: (userDetails: IUserDetails) =>
      dispatch(setUserDetails(userDetails)),
  };
};

const setUserDetails = (userDetails: IUserDetails): ISetUserDetails => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails: ILoginDetails, history: NavigateFunction) => {
  return async (dispatch: Dispatch<ISetUserDetails | IOpenAlertMessage>) => {
    const response = await api.login(userDetails);

    if (!isAxiosResponce(response)) {
      if(axios.isAxiosError(response.exception)) {
        dispatch(openAlertMessage(response?.exception?.response?.data));
      } else {
        dispatch(openAlertMessage(response?.exception));
      }
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      history("/dashboard");
    }
  };
};

const register = (userDetails: IRegisterDetails, history: NavigateFunction) => {
  return async (dispatch: Dispatch<ISetUserDetails | IOpenAlertMessage>) => {
    const response = await api.register(userDetails);
    console.log(response);

    if (!isAxiosResponce(response)) {
      if (axios.isAxiosError(response.exception)) {
        dispatch(openAlertMessage(response?.exception?.response?.data));
      } else {
        dispatch(openAlertMessage(response.exception));
      }
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      history("/dashboard");
    }
  };
};
