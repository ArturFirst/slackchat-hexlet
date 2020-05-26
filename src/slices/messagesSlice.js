/* eslint max-len: ["error", { "code": 120 }] */
import { createSlice } from '@reduxjs/toolkit';
import channelsActions from './channelsSlice';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage: (state, { payload: { message } }) => { state.push(message); },
  },
  extraReducers: {
    [channelsActions.removeChannel]: (state, { payload: { id } }) => state.filter((el) => el.channelId === id),
  },
});

export default messagesSlice.actions;
export const { reducer } = messagesSlice;
