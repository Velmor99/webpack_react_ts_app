import {IActions} from '../store/actions/alert.actions';

export interface IOpenAlertMessage {
    type: IActions['OPEN_ALERT_MESSAGE']
    content: string
}

export interface ICloseAlertMessage {
    type: IActions['CLOSE_ALERT_MESSAGE']
}