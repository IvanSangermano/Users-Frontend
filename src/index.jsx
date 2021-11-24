import React from 'react';
import ReactDOM from 'react-dom';
import UserApp from './UsersApp';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
