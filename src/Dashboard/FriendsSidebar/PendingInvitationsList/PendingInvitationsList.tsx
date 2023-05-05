import React from 'react';
import {styled} from '@mui/system';
import PendingInvitantionsListItem from './PendingInvitationsListItem';
import {connect} from 'react-redux';
import { IFriends, IPendingFriendInvitantion } from '../../../protocols/friends.types';

const MainContainer = styled('div')({
    width: '100%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
})

interface IProps {
    pendingFriendsInvitantions: IPendingFriendInvitantion[]
}

const PendingInvitationsList = ({pendingFriendsInvitantions}: IProps) => {
    // console.log('pending',pendingFriendsInvitantions)
    return (
        <MainContainer>
            {pendingFriendsInvitantions.map(invitantion => (
                <PendingInvitantionsListItem 
                key={invitantion._id}
                id={invitantion._id}
                username={invitantion.senderId.username}
                mail={invitantion.senderId.mail}
                />
            ))}
        </MainContainer>
    )
}

const mapStateToProps = ({friends}: IFriends) => {
    return {
        ...friends,
    }
}

export default connect(mapStateToProps, null)(PendingInvitationsList)