import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {Box} from '@mui/material';
import IconButton from '@mui/material/IconButton';

interface IProps {
    disabled: boolean,
    acceptInvitantionHandler(): void,
    rejectInvitantionHandler(): void
}

const InvitantionDecisionButtons = ({disabled, acceptInvitantionHandler, rejectInvitantionHandler}: IProps) => {
    return (
        <Box sx={{display: 'flex'}}>
            <IconButton
            style={{color: 'white'}}
            disabled={disabled}
            onClick={acceptInvitantionHandler}
            >
                <CheckIcon />
            </IconButton>
            <IconButton
            style={{color: 'white'}}
            disabled={disabled}
            onClick={rejectInvitantionHandler}
            >
                <ClearIcon />
            </IconButton>
        </Box>
    )
}

export default InvitantionDecisionButtons;