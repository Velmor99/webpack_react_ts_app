import { IFriends, IFriend, IOnlineUser, IPendingFriendInvitantion } from "../../protocols/friends.types";
import { friendsActions } from "../actions/friendsActions";

const initialState: IFriends = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

interface IFriendsAction {
  type: keyof typeof friendsActions,
  pendingFriendsInvitations?: IPendingFriendInvitantion[],
  friends?: IFriend[],
  onlineUsers?: IOnlineUser[]
}

const reducer = (state = initialState, action: IFriendsAction): IFriends => {
  switch (action.type) {
    case friendsActions.SET_PENDING_FRIENDS_INVITANTIONS:
      return {
        ...state,
        pendingFriendsInvitations: action.pendingFriendsInvitations
        ,
      };
    case friendsActions.SET_FRIENDS:
      if(action.friends) {
        return {
          ...state,
          friends: action.friends,
        };
      }
    case friendsActions.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.onlineUsers,
      };

    default:
      return state;
  }
};

export default reducer;
