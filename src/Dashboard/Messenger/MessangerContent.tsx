import React from 'react';
import {useEffect} from 'react';
import {styled} from '@mui/system';
import Messages from './Messages/Messages';
import NewMessageInput from './NewMessageInput';
import { getDirectChatHistory } from '../../realtimeCommunication/socketConnection';
import { IChosenChatDetails } from '../../protocols/chat.types';

const Wrapper = styled("div")({
    flexGrow: 1,

})

interface IProps {
    chosenChatDetails: IChosenChatDetails
}

const MessangerContent = ({chosenChatDetails}: IProps) => {
    useEffect(() => {
        // TODO 
        // feaching chat history from specific userId
        getDirectChatHistory({
            receiverUserId: chosenChatDetails.id,
        })
    }, [chosenChatDetails])
    return (
        <Wrapper>
            <Messages />
            <NewMessageInput />
        </Wrapper>
    )
}

export default MessangerContent