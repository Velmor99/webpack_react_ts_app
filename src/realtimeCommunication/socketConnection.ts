import io from 'socket.io-client'
import {setPendingFriendsInvitations, setFriends, setOnlineUsers} from '../store/actions/friendsActions';
import store from '../store/store';
import {updateDirectChatHistoryIfActive} from '../shared/utils/chat';
import { IDirectChatHistoryData, IDirectMessageData, IFriendsInvitationsData, IFriendsListData, IGetDirectChatHistoryData, IOnlineUsersData } from '../protocols/socketData.types';
import { IUserDetails } from '../protocols/auth.types';

let socket: any = null;

export const connectWithSocketServer = (userDetails: IUserDetails) => {
    const jwtToken = userDetails.token
    socket = io("http://localhost:5022", {
        auth: {
            token: jwtToken,
        }
    })

    socket.on("connect", () => {
        // console.log('succesfully connected with socket.io server');
        // console.log(socket.id)
    });

    socket.on("friends-invitations", (data: IFriendsInvitationsData) => {
        const {pendingInvitations} = data
        store.dispatch(setPendingFriendsInvitations(pendingInvitations))
    })

    socket.on("friends-list", (data: IFriendsListData) => {
        const {friends} = data;
        console.log('friends', friends)
        store.dispatch(setFriends(friends))
    })

    socket.on("online-users", (data: IOnlineUsersData) => {
        const {onlineUsers} = data
        store.dispatch(setOnlineUsers(onlineUsers))
    })

    socket.on("direct-chat-history", (data: IDirectChatHistoryData) => {
        updateDirectChatHistoryIfActive(data);
    })
}

export const sendDirectMessage = (data: IDirectMessageData) => {
    console.log('data', data)
    socket.emit('direct-message', data)
}

export const getDirectChatHistory = (data: IGetDirectChatHistoryData) => {
    console.log(data)
    socket.emit("direct-chat-history", data)
}