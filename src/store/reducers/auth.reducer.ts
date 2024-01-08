import { IAuthResponce, IUserDetails } from '../../protocols/auth.types';
import {authActions} from '../actions/auth.actions';

const initialState: IAuthResponce = {
  userDetails: {
    mail: "",
    token: "",
    username: "",
    _id: "",
  }
};

interface IAuthAction {
  type: "AUTH.SET_USER_DETAILS",
  userDetails: IUserDetails
}

const reducer = (state = initialState, action: IAuthAction): IAuthResponce => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails
      };
    default:
      return state;
  }
};

export default reducer
