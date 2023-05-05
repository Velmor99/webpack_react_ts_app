import React from 'react';
import { Typography } from "@mui/material";
import {connect} from 'react-redux';
import { RootState } from '../../store/store';
import { useAppSelector } from '../../store/hooks';

interface IProps {
  name: string
}

const ChosenOptionLabel = () => {
  const chat = useAppSelector(state => state.chat)
  let name;
  if(chat.chosenChatDetails) {
    name = chat.chosenChatDetails.name
  }
  return (
    <Typography
      sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}
    >{`${name ? `Chosen conversation: ${name}` : ""}`}</Typography>
  );
};

const mapStoreStateToProps = (state: RootState) => {
    return {
        name: state.chat.chosenChatDetails?.name,
    }
}

export default connect(mapStoreStateToProps, null)(ChosenOptionLabel);
