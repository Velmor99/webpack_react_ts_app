import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import {connect, useDispatch} from 'react-redux';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {getActions} from '../../store/actions/alert.actions';
import { AppDispatch, RootState } from '../../store/store';
import {alertActions} from '../../store/actions/alert.actions';

const AlertNotification = () => {
    const alert = useAppSelector((state: RootState) => state.alert)
    const dispatch = useAppDispatch()
    return (
        <Snackbar
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            open={alert.showAlertMessage}
            onClose={() => dispatch({type: alertActions.CLOSE_ALERT_MESSAGE})}
            autoHideDuration={6000}
        >
            <Alert severity='info'>{alert.alertMessageContent}</Alert>
        </Snackbar>
    )
}

export default connect(null, null)(AlertNotification)