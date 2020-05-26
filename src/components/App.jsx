import React, { useState } from 'react';
import Messages from './Messages';
import NewMessageForm from './NewMessageForm';
import Channels from './Channels';
import Settings from './Settings';
import getModal from './modals/index.js';

const renderModal = ({ modalInfo, hideModal }) => {
  if (!modalInfo.type) { return null; }
  const Component = getModal(modalInfo.type);
  return <Component modalInfo={modalInfo} onHide={hideModal} />;
};

const App = ({ data }) => {
  const [modalInfo, setModalInfo] = useState({ type: null, item: null });
  const hideModal = () => setModalInfo({ type: null, item: null });
  const showModal = (type, item = null) => setModalInfo({ type, item });

  return (
    <div className="row h-100 border-right">
      <div className="col-3 border-right">
        <Channels data={data} showModal={showModal} />
        <Settings showModal={showModal} />
      </div>
      <div className="col-9 h-100" style={{ backgroundColor: '#E1ECF9' }}>
        <div className="d-flex flex-column h-100 border-bottom">
          <div id="messages-box" className="chat-messages overflow-auto mb-1">
            <Messages />
          </div>
          <NewMessageForm showModal={showModal} />
        </div>
      </div>
      {renderModal({ modalInfo, hideModal })}
    </div>
  );
};

export default App;
