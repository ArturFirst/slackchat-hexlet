import React, { useEffect, useRef } from 'react';
import i18next from 'i18next';
import { useFormik } from 'formik';
import { FormGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import routes from '../../routes';

const generateOnSubmit = ({ onHide }) => async ({ name }) => {
  await axios.post(routes.channelsPath(), { data: { attributes: { name } } });
  onHide();
};

export default (props) => {
  const { onHide } = props;
  const form = useFormik({ onSubmit: generateOnSubmit(props), initialValues: { name: '' } });
  const inputRef = useRef();

  useEffect(() => { inputRef.current.focus(); }, [null]);

  return (
    <div className="modal fade show" role="dialog" style={{ display: 'block' }} centered="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{i18next.t('addNewChannelVersionTwo')}</h4>
            <button onClick={onHide} type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={form.handleSubmit}>
              <FormGroup>
                <FormControl
                  required
                  ref={inputRef}
                  placeholder={i18next.t('addChanelPlaceholder')}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.body}
                  name="name"
                />
              </FormGroup>
              <input type="submit" className="btn btn-primary" value={i18next.t('addNewChannel')} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
