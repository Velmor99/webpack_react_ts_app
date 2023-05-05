import React from 'react';
import { styled } from "@mui/system";
import MessagesHeader from "./MessagesHeader";
import { connect } from "react-redux";
import Message from "./Message";
import DateSeparator from './DateSeparator';
import { RootState } from '../../../store/store';
import { IChosenChatDetails, IMessage } from '../../../protocols/chat.types';
import { useAppSelector } from '../../../store/hooks';

const MainContainer = styled("div")({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

interface IMap {
  mm: string,
  dd: string,
  yy: string,
  yyyy: string
}

const convertDateToHumanReadable = (date: Date, format: string) => {
  const map: IMap = {
    mm: (date.getMonth() + 1).toString(),
    dd: date.getDate().toString(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear().toString(),
  };

  return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched as keyof IMap]);
};

const Messages = () => {
  const messages = useAppSelector(state => state.chat.messages)
  const chosenChatDetails = useAppSelector(state => state.chat.chosenChatDetails)
  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      {messages?.map((message, index) => {
        const sameAuthor =
          index > 0 &&
          messages[index].authorId._id === messages[index - 1].authorId._id;

        const sameDay =
          index > 0 &&
          convertDateToHumanReadable(new Date(message.date), "dd/mm/yy") ===
            convertDateToHumanReadable(
              new Date(messages[index - 1].date),
              "dd/mm/yy"
            );

        return (
          <div key={message._id} style={{ width: "97%" }}>
            {(!sameDay || index === 0) && (
              <DateSeparator date={convertDateToHumanReadable(new Date(message.date), 'dd/mm/yy')} />
            )}
            <Message
              content={message.content}
              username={message.authorId.username}
              sameAuthor={sameAuthor}
              date={convertDateToHumanReadable(
                new Date(message.date),
                "dd/mm/yy"
              )}
              sameDay={sameDay}
            />
          </div>
        );
      })}
    </MainContainer>
  );
};

const mapStoreStateToProps = (state: RootState) => {
  return {
    chat: state.chat,
  };
};

export default connect(mapStoreStateToProps, null)(Messages);
