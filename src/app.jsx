// @ts-check
import i18next from 'i18next';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import faker from 'faker';
import cookies from 'js-cookie';
import resources from './locales';
import App from './components/App';
import store from './reducers';
import listenSocket from './webSockets';
import renderInitial from './renderInitial';
import UserNameContext from './userNameContext';

export default (data) => {
  i18next.init({ lng: 'en', debug: true, resources });

  cookies.set('userName', faker.name.findName());
  renderInitial(data);
  listenSocket();

  render(
    <Provider store={store}>
      <UserNameContext.Provider value={cookies.get('userName')}>
        <App data={data} />
      </UserNameContext.Provider>
    </Provider>,
    document.getElementById('chat'),
  );
};
