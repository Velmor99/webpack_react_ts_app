import React, {useEffect} from 'react';
import {styled} from '@mui/system';
import Sidebar from './Sidebar/Sidebar';
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";
import AppBar from "./AppBar/AppBar";
import Messenger from "./Messenger/Messenger";
import { logout } from '../shared/utils/auth';
import {connect} from 'react-redux';
import {getActions} from '../store/actions/auth.actions';
import {connectWithSocketServer} from '../realtimeCommunication/socketConnection';
import { IUserDetails } from '../protocols/auth.types';
import { AppDispatch } from '../store/store';

const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex'
})

interface IProps {
    setUserDetails(userDetails: IUserDetails): void
}

const Dashboard = ({setUserDetails}: IProps) => {

    useEffect(() => {
        const userDetails = localStorage.getItem('user');
        console.log(userDetails)
        if(!userDetails) {
            logout();
        } else {
            setUserDetails(JSON.parse(userDetails));
            connectWithSocketServer(JSON.parse(userDetails))
        }
    }, [])

    return (
        <Wrapper>
            <Sidebar />
            <FriendsSidebar />
            <Messenger />
            <AppBar />
        </Wrapper>
    )
}

const mapActionsToProps = (dispatch: AppDispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(Dashboard);