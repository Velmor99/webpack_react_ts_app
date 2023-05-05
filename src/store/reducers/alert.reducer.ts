import { IAlert } from "../../protocols/alert.types";
import alertActions from "../actions/alert.actions";

const initialState: IAlert = {
  showAlertMessage: false,
  alertMessageContent: "",
};

interface IAlertAction {
  type: keyof typeof alertActions,
  content: string
}

const reducer = (state = initialState, action: IAlertAction): IAlert => {
  switch (action.type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: true,
        alertMessageContent: action.content,
      };
    case alertActions.CLOSE_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: false,
        alertMessageContent: null,
      };
    default:
      return state;
  }
};

export default reducer;
