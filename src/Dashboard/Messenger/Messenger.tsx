import React from 'react';
import {styled} from '@mui/system'
import {connect} from 'react-redux';
import WelcomeMessage from './WelcomeMessage';
import MessangerContent from './MessangerContent';
import {RootState} from '../../store/store';
import { IChosenChatDetails } from '../../protocols/chat.types';
import { useAppSelector } from '../../store/hooks';

const MainContainer = styled('div')({
    flexGrow: 1,
    backgroundColor: '#36393F',
    marginTop: '48px',
    display: 'flex',
})

const Messenger = () => {
    const chosenChatDetails = useAppSelector(state => state.chat.chosenChatDetails)
    return (
        <MainContainer>
            {!chosenChatDetails ? (<WelcomeMessage />) : <MessangerContent chosenChatDetails={chosenChatDetails} />}
        </MainContainer>
    );
};

export default connect(null, null)(Messenger)