import i18next from 'i18next';
import React, { useEffect, useRef } from 'react';
import { FormGroup } from 'react-bootstrap';
import axios from 'axios';
import routes from '../../routes';

const generateOnSubmit = ({ modalInfo, onHide }) => async () => {
  await axios.delete(routes.channelPath(modalInfo.item.id), {});
  onHide();
};

export default (props) => {
  const { onHide } = props;
  const onSubmit = generateOnSubmit(props);
  const inputRef = useRef();

  useEffect(() => { inputRef.current.focus(); }, [null]);

  return (
    <div className="modal fade show" role="dialog" style={{ display: 'block' }} centered="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{i18next.t('removeTitle')}</h4>
            <button onClick={onHide} type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <FormGroup>
                <input ref={inputRef} type="submit" className="btn btn-danger" value={i18next.t('removeChannel')} />
              </FormGroup>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
