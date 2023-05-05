import axios, { AxiosError } from "axios";
import { IAuthResponce, ILoginDetails, IRegisterDetails } from "./protocols/auth.types";
import { IActionWithInvite, IInviteRequest } from "./protocols/invitantions.types";
import { logout } from "./shared/utils/auth";

//axios configs
const apiClient = axios.create({
  baseURL: "http://localhost:5022/api",
  timeout: 1000,
});

//interceptors will work in every call to api
apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//public routes

export const login = async (data: ILoginDetails) => {
  try {
    return await apiClient.post<IAuthResponce>("/auth/login", data);
  } catch (exception) {
    if (axios.isAxiosError(exception)) {
      return {
        error: true,
        exception: exception,
      };
    } 
    else {
      return {
        error: true,
        exception: 'Unknown error',
      };
    }
  }
};

export const register = async (data: IRegisterDetails) => {
  try {
    return await apiClient.post<IAuthResponce>("/auth/register", data);
  } catch (exception) {
    if (axios.isAxiosError(exception)) {
      return {
        error: true,
        exception,
      };
    } else {
      console.log(exception);
      return {
        error: true,
        exception: "Unknown error",
      };
    }
  }
};

//secure routes

export const sendFriendInvitantion = async (data: IInviteRequest) => {
  try {
    return await apiClient.post("/friend-invitation/invite", data);
  } catch (exception) {
    //if 401 we will automaticly logout
    if (axios.isAxiosError(exception)) {
      checkResponseCode(exception);
      return {
        error: true,
        exception,
      };
    } else {
      console.log(exception);
      return {
        error: true,
        exception: "Unknown error",
      };
    }
  }
};

export const acceptFriendInvitation = async (data: IActionWithInvite) => {
  try {
    return await apiClient.post("/friend-invitation/accept", data);
  } catch (exception) {
    //if 401 we will automaticly logout
    if (axios.isAxiosError(exception)) {
      checkResponseCode(exception);
      return {
        error: true,
        exception,
      };
    } else {
      console.log(exception);
      return {
        error: true,
        exception: "Unknown error",
      };
    }
  }
};

export const rejectFriendInvitation = async (data: IActionWithInvite) => {
  try {
    return await apiClient.post("/friend-invitation/reject", data);
  } catch (exception) {
    if (axios.isAxiosError(exception)) {
      checkResponseCode(exception);
      return {
        error: true,
        exception,
      };
    } else {
      console.log(exception);
      return {
        error: true,
        exception: "Unknown error",
      };
    }
  }
};

const checkResponseCode = (exception: AxiosError) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
