import AddChannel from './AddChannel';
import RenameChannel from './RenameChannel';
import RemoveChannel from './RemoveChannel';
import UserName from './UserName';

const modals = {
  addChannel: AddChannel,
  renameChannel: RenameChannel,
  removeChannel: RemoveChannel,
  userName: UserName,
};

export default (modalName) => modals[modalName];
