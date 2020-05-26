import i18next from 'i18next';
import React, { useEffect, useRef } from 'react';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { useFormik } from 'formik';
import cookies from 'js-cookie';
import _ from 'lodash';

const generateOnSubmit = ({ onHide }) => ({ name, surname }) => {
  cookies.set('userName', `${name} ${surname}`);
  onHide();
};

export default (props) => {
  const form = useFormik({ onSubmit: generateOnSubmit(props), initialValues: { name: '', surname: '' } });
  const { onHide } = props;
  const inputRef = useRef();
  const headerTitle = i18next
    .t('userNameModalTitle')
    .split('\n')
    .map((line) => <div key={_.uniqueId()}>{line}</div>);

  useEffect(() => { inputRef.current.focus(); }, [null]);

  return (
    <div className="modal fade show" role="dialog" style={{ display: 'block' }} centered="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{headerTitle}</h4>
            <button onClick={onHide} type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <FormLabel>{i18next.t('userNameModalName')}</FormLabel>
            <form onSubmit={form.handleSubmit}>
              <FormGroup>
                <FormControl
                  required
                  ref={inputRef}
                  placeholder={i18next.t('userNamePlaceholder')}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.name}
                  name="name"
                />
                <FormLabel className="mt-2">{i18next.t('userNameModalSurname')}</FormLabel>
                <FormControl
                  required
                  placeholder={i18next.t('userSuramePlaceholder')}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.surname}
                  name="surname"
                />
              </FormGroup>
              <input type="submit" className="btn btn-primary" value={i18next.t('userNameModalSubmit')} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
