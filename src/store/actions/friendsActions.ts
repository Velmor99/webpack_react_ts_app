import { openAlertMessage } from "./alert.actions";
import * as api from "../../api";
import {
  IFriend,
  IOnlineUser,
  IPendingFriendInvitantion,
} from "../../protocols/friends.types";
import { IActionWithInvite, IInviteRequest } from "../../protocols/invitantions.types";
import { isAxiosResponce } from "../../protocols/api.types";
import axios from "axios";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITANTIONS: "FRIENDS.SET_PENDING_FRIENDS_INVITANTIONS",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
};

export const getActions = (dispatch: any) => {
  return {
    sendFriendInvitation: (data: IInviteRequest, closeDialogHandler: () => void) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
    acceptFriendInvitantion: (data: IActionWithInvite) => dispatch(acceptFriendInvitation(data)),
    rejectFriendInvitantion: (data: IActionWithInvite) => dispatch(rejectFriendInvitation(data)),
  };
};

export const setPendingFriendsInvitations = (
  pendingFriendsInvitations: IPendingFriendInvitantion[]
) => {
  // console.log("from action", pendingFriendsInvitations);
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITANTIONS,
    pendingFriendsInvitations,
  };
};

export const setFriends = (friends: IFriend[]) => {
  return {
    type: friendsActions.SET_FRIENDS,
    friends,
  };
};

const sendFriendInvitation = (
  data: IInviteRequest,
  closeDialogHandler: () => void
) => {
  return async (dispatch: any) => {
    const response = await api.sendFriendInvitantion(data);

    if (!isAxiosResponce(response)) {
      if (axios.isAxiosError(response.exception)) {
        dispatch(openAlertMessage(response?.exception?.response?.data));
      } else {
        dispatch(openAlertMessage(response?.exception));
      }
    } else {
      dispatch(openAlertMessage("Invitantion has been sent!"));
      closeDialogHandler();
    }
  };
};

const acceptFriendInvitation = (data: IActionWithInvite) => {
  return async (dispatch: any) => {
    const response = await api.acceptFriendInvitation(data);

    if (!isAxiosResponce(response)) {
      if (axios.isAxiosError(response.exception)) {
        dispatch(openAlertMessage(response?.exception?.response?.data));
      } else {
        dispatch(openAlertMessage(response?.exception));
      }
    } else {
      dispatch(openAlertMessage("Invitantion accepted!"));
    }
  };
};

const rejectFriendInvitation = (data: IActionWithInvite) => {
  return async (dispatch: any) => {
    const response = await api.rejectFriendInvitation(data);

    if (!isAxiosResponce(response)) {
      if (axios.isAxiosError(response.exception)) {
        dispatch(openAlertMessage(response?.exception?.response?.data));
      } else {
        dispatch(openAlertMessage(response?.exception));
      }
    } else {
      dispatch(openAlertMessage("Invitantion rejected!"));
    }
  };
};

export const setOnlineUsers = (onlineUsers: IOnlineUser[]) => {
  return {
    type: friendsActions.SET_ONLINE_USERS,
    onlineUsers,
  };
};
