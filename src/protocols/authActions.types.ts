import {IActions} from '../store/actions/auth.actions';
import { IUserDetails } from './auth.types';

export interface ISetUserDetails {
    type: IActions['SET_USER_DETAILS'],
    userDetails: IUserDetails
}