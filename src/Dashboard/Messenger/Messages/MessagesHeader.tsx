import React from 'react';
import { styled } from "@mui/system";
import Avatar from "../../../shared/components/Avatar";
import Typography from "@mui/material/Typography";

const MainContainer = styled("div")({
  width: "98%",
  display: "column",
  marginTop: "10px",
});

const MessagesHeader = ({ name = "" }) => {
  return (
    <MainContainer>
      <Avatar large={true} username={name} />
      <Typography
        variant="h4"
        sx={{
          fontSize: "bold",
          color: "white",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: "#b9bbbe",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        This is the begginning of your conversation with {name}
      </Typography>
    </MainContainer>
  );
};

export default MessagesHeader;
