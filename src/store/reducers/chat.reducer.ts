import { IChat, IChosenChatDetails, IMessage } from "../../protocols/chat.types";
import { chatActions } from "../actions/chat.actions";

const initialState: IChat = {
  messages: [],
  chatType: null,
  chosenChatDetails: null,
};

interface IChatAction {
  type: keyof typeof chatActions,
  messages?: IMessage[],
  chatType?: string,
  chatDetails?: IChosenChatDetails
}

const reducer = (state = initialState, action: IChatAction): IChat => {
  switch (action.type) {
    case chatActions.SET_CHOSEN_CHAT_DETAILS:
      return {
        ...state,
        chosenChatDetails: action.chatDetails,
        chatType: action.chatType,
        messages: [],
      };
    case chatActions.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export default reducer;
