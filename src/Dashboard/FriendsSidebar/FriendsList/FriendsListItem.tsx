import React from 'react';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from '../../../shared/components/Avatar';
import OnlineIndicator from "./OnlineIndicator";
import {getActions, chatTypes} from '../../../store/actions/chat.actions';
import {connect} from 'react-redux';
import { AppDispatch } from '../../../store/store';

interface IProps {
    id: string,
    username: string,
    isOnline: boolean,
    setChosenChatDetails(details: {id: string, name: string}, chatType: string): void
}

const FriendsListItem = ({id, username, isOnline, setChosenChatDetails}: IProps) => {
    const handleChooseActiveConversation = () => {
        console.log('from friend list item', {id: id, name: username})
        setChosenChatDetails({id: id, name: username}, chatTypes.DIRECT)
    }

    return (
        <Button
        onClick={handleChooseActiveConversation}
        style={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textTransform: 'none',
            color: 'black',
            position: 'relative',

        }}
        >
            <Avatar large={false} username={username}/>
            <Typography
            style={{
                marginLeft: '7px',
                fontWeight: 700,
                color: '#8e9297'
            }}
            variant="subtitle1"
            align="left"
            >
                {username}
            </Typography>
            {isOnline && <OnlineIndicator />}
        </Button>
    )
}

const mapActionsToProps = (dispatch: any) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(FriendsListItem)