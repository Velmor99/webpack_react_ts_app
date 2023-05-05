import { NavigateFunction } from "react-router-dom";

export interface ILoginDetails {
  mail: string;
  password: string;
}

export interface IRegisterDetails extends ILoginDetails {
  username: string;
}

export interface IAuthResponce {
  userDetails: {
    mail: string;
    token: string;
    username: string;
    _id: string;
  };
}

export interface IUserDetails {
  mail: string;
  token: string;
  username: string;
  _id: string;
}

export interface IAuthActions {
  login(userDetails: ILoginDetails, history: NavigateFunction): any;
}
