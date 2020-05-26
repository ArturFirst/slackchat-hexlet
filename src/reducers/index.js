import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer as messagesReducer } from '../slices/messagesSlice';
import { reducer as channelsReducer } from '../slices/channelsSlice';

const rootReducer = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
