import { IChosenChatDetails, IMessage } from "../../protocols/chat.types"

export const chatTypes = {
    DIRECT: 'DIRECT',
    GROUP: 'GROUP'
}

export const chatActions = {
    SET_CHOSEN_CHAT_DETAILS: 'CHAT.SET_CHOSEN_CHAT_DETAILS',
    SET_MESSAGES: 'CHAT.SET_MESSAGES',
    SET_CHAT_TYPE: 'CHAT.SET_CHAT_TYPE'
}

export const getActions = (dispatch: any) => {
    return {
        setChosenChatDetails: (details: IChosenChatDetails, chatType: string) => {
            dispatch(setChosenChatDetails(details, chatType))
        }
    }
}

export const setChosenChatDetails = (chatDetails: IChosenChatDetails, type: string) => {
    return {
        type: chatActions.SET_CHOSEN_CHAT_DETAILS,
        chatType: type,
        chatDetails
    }
}

export const setMessages = (messages: IMessage[]) => {
    return {
        type: chatActions.SET_MESSAGES,
        messages
    }
}