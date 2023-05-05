import { IMessage } from './chat.types';
import {IPendingFriendInvitantion, IFriend, IOnlineUser} from './friends.types';

export interface IPendingInvitationsData {
    pendingInvitations: IPendingFriendInvitantion[] | []
}

export interface IFriendsListData {
    friends: IFriend[] | []
}

export interface IOnlineUsersData {
    onlineUsers: IOnlineUser[] | []
}

export interface IDirectChatHistoryData {
    messages: IMessage[],
    participants: [string, string]
}

export interface IFriendsInvitationsData {
    pendingInvitations: IPendingFriendInvitantion[]
}

export interface IDirectMessageData {
    receiverUserId: string,
    content: string
}

export interface IGetDirectChatHistoryData {
    receiverUserId: string
}

// sendDirectMessage({
//     receiverUserId: chosenChatDetails.id,
//     content: message,
// })

