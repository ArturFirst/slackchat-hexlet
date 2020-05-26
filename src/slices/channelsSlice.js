/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: { elements: [], activeId: 0 },
  reducers: {
    addChannel: (state, { payload: { channel } }) => {
      state.elements.push(channel);
      state.activeId = channel.id;
    },
    removeChannel: (state, { payload: { id } }) => {
      state.elements = state.elements.filter((el) => el.id !== id);
    },
    renameChannel: (state, { payload: { channel: { id, name } } }) => {
      const channel = state.elements.find((el) => el.id === id);
      channel.name = name;
    },
    selectChannel: (state, { payload: { id } }) => {
      state.activeId = id;
    },
  },
});

export default channelsSlice.actions;
export const { reducer } = channelsSlice;
