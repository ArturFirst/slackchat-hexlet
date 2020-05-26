import socket from 'socket.io-client';
import store from './reducers';
import messageActions from './slices/messagesSlice';
import channelsActions from './slices/channelsSlice';

export default () => {
  const { addMessage } = messageActions;
  const { addChannel, renameChannel, removeChannel } = channelsActions;

  socket
    .connect()
    .on('newMessage', (res) => { store.dispatch(addMessage({ message: res.data.attributes })); })
    .on('newChannel', (res) => { store.dispatch(addChannel({ channel: res.data.attributes })); })
    .on('renameChannel', (res) => { store.dispatch(renameChannel({ channel: res.data.attributes })); })
    .on('removeChannel', (res) => { store.dispatch(removeChannel({ id: res.data.id })); });
};
