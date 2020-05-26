import messageActions from './slices/messagesSlice';
import channelsActions from './slices/channelsSlice';
import store from './reducers';

export default ({ messages, channels }) => {
  const { addMessage } = messageActions;
  const { addChannel, selectChannel } = channelsActions;
  const defaultChannelId = 1;
  messages.forEach((el) => { store.dispatch(addMessage({ message: el })); });
  channels.forEach((el) => { store.dispatch(addChannel({ channel: el })); });
  store.dispatch(selectChannel({ id: defaultChannelId }));
};
