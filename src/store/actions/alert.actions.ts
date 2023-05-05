import { Dispatch } from "@reduxjs/toolkit"
import { ICloseAlertMessage, IOpenAlertMessage } from "../../protocols/alertActions.types"

export const alertActions: IActions = {
    OPEN_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
    CLOSE_ALERT_MESSAGE: "ALERT.CLOSE_ALERT_MESSAGE"
}

export interface IActions {
    OPEN_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
    CLOSE_ALERT_MESSAGE: "ALERT.CLOSE_ALERT_MESSAGE"
}

export const getActions = (dispatch: Dispatch<IOpenAlertMessage | ICloseAlertMessage>) => {
    return {
        openAlertMessage: (content: string) => dispatch(openAlertMessage(content)),
        closeAlertMessage: () => dispatch(closeAlertMessage())
    }
}

export const openAlertMessage = (content: string) => {
    return {
        type: alertActions.OPEN_ALERT_MESSAGE,
        content,
    }
}

export const closeAlertMessage = () => {
    return {
        type: alertActions.CLOSE_ALERT_MESSAGE
    }
}

export default alertActions

