import { configureStore } from '@reduxjs/toolkit';
// import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducers/auth.reducer';
import alertReducer from './reducers/alert.reducer';
import friendsReducer from './reducers/friends.reducer';
import chatReducer from './reducers/chat.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  friends: friendsReducer,
  chat: chatReducer,
})

const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;