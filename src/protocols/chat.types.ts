export interface IChat {
    messages: IMessage[] | undefined,
    chatType: null | string | undefined,
    chosenChatDetails: null | IChosenChatDetails | undefined
}

export interface IChosenChatDetails {
    id: string,
    name: string
}

export interface IMessage {
    _id: string,
    authorId: {
        _id: string,
        username: string
    }
    content: string,
    date: Date,
    type: string,
    __v: number
}