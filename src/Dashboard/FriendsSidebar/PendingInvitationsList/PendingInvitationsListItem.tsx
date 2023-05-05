import React from 'react';
import { Box, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import Avatar from "../../../shared/components/Avatar";
import InvitantionDecisionButtons from "./InvitantionDecisionButtons";
import {connect} from 'react-redux';

//acceptFriendInvitantion and rejectFriendInvitantion below
import {getActions} from '../../../store/actions/friendsActions';
import { AppDispatch } from '../../../store/store';

type ID = {id: string}

interface IProps {
  id: string,
  username: string,
  mail: string,
  acceptFriendInvitantion({id}: ID): void,
  rejectFriendInvitantion({id}: ID): void,
}

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitantion = () => {},
  rejectFriendInvitantion = () => {},
}: IProps) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitantion = () => {
    acceptFriendInvitantion({ id });
    setButtonsDisabled(true);
  };

  const handleRejectInvitantion = () => {
    rejectFriendInvitantion({ id });
    setButtonsDisabled(true);
  };
  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar large={false} username={username}></Avatar>
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitantionDecisionButtons
            disabled={buttonsDisabled}
            acceptInvitantionHandler={handleAcceptInvitantion}
            rejectInvitantionHandler={handleRejectInvitantion}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

const mapActionsToProps = (dispatch: AppDispatch) => {
  return {
    ...getActions(dispatch),
  }
}

export default connect(null, mapActionsToProps)(PendingInvitationsListItem);
