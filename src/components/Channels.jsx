import i18next from 'i18next';
import { Nav } from 'react-bootstrap';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { TrashFill, PencilSquare } from 'react-bootstrap-icons';
import channelsActions from '../slices/channelsSlice';

const Channels = (props) => {
  const dispatch = useDispatch();
  const allChannels = useSelector(({ channels: { elements } }) => elements);
  const activeChannelId = useSelector(({ channels: { activeId } }) => activeId);
  const { showModal } = props;
  const handleSelectChannel = (id) => () => { dispatch(channelsActions.selectChannel({ id })); };

  const renderNavs = allChannels.map((el) => {
    const btnClass = cn({
      'nav-link btn btn-block m-1': true,
      active: el.id === activeChannelId,
    });
    return (
      <Nav.Item key={el.id} as="li">
        <button type="button" className={btnClass} onClick={handleSelectChannel(el.id)}>
          <div className="float-left">{el.name}</div>
          <div className="float-right align-middle">
            {el.removable && <TrashFill onClick={() => showModal('removeChannel', el)} />}
            <PencilSquare onClick={() => showModal('renameChannel', el)} className="ml-1" />
          </div>
        </button>
      </Nav.Item>
    );
  });

  return (
    <div className="mt-2">
      <h5 className="d-flex mb-2">
        <span>{i18next.t('channels')}</span>
        <button
          onClick={() => showModal('addChannel')}
          type="button"
          className="btn btn-link p-0 ml-auto"
        >
          {i18next.t('addNewChannel')}
        </button>
      </h5>
      <Nav as="ul" className="flex-column nav-pills" variant="nav-fill">
        {renderNavs}
      </Nav>
    </div>
  );
};

export default Channels;
