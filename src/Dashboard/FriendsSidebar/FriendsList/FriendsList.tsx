import React from 'react';
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";
import { connect } from "react-redux";
import {useAppSelector} from '../../../store/hooks';
import { IFriends, IFriend, IOnlineUser } from '../../../protocols/friends.types';
import { RootState } from '../../../store/store';

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

//TODO fix mutate state (maybe online friends should be calculate on server side)
const checkOnlineUsers = (friends: IFriend[] = [], onlineUsers: IOnlineUser[] = []) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
    f.isOnline = isUserOnline ? true : false;
  });
  return friends;
};

const FriendsList = () => {

  const friends = useAppSelector((state) => state.friends)

  return (
    <MainContainer>
      {checkOnlineUsers(friends.friends, friends.onlineUsers).map((f) => (
        <FriendsListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline ? f.isOnline : false}
        />
      ))}
    </MainContainer>
  );
};

export default connect(null, null)(FriendsList);
