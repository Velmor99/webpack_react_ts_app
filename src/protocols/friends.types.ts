export interface IOnlineUser {
    sockedId: string,
    userId: string
}

export interface IFriend {
    id: string,
    mail: string,
    username: string,
    isOnline?: boolean,
}

export interface IPendingFriendInvitantion {
    _id: string,
    receiverId: string,
    __v: number,
    senderId: {
        _id: string,
        mail: string,
        username: string
    }
}

export interface IFriends {
    friends: IFriend[] | undefined,
    pendingFriendsInvitations: IPendingFriendInvitantion[] | undefined,
    onlineUsers: IOnlineUser[] | undefined
}