import store from "../../store/store";
import { setMessages } from "../../store/actions/chat.actions";
import { IDirectChatHistoryData } from "../../protocols/socketData.types";

interface IData extends IDirectChatHistoryData {
  usersInConversation: [string, string]
}

export const updateDirectChatHistoryIfActive = (data: IDirectChatHistoryData) => {
  const { participants, messages } = data;

  // find id of user from token and id from active conversation
  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails._id;
  console.log('sdlkjf', receiverId, userId)

  if (receiverId && userId) {
    const usersInConversation: [string, string] = [receiverId, userId];

    updateChatHistoryIfSameConversationActive({
      participants,
      usersInConversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  usersInConversation,
  messages,
}: IData) => {
    const result = participants.every(function(participantId) {
        return usersInConversation.includes(participantId);
    });

    if(result) {
        store.dispatch(setMessages(messages));
    }
}
