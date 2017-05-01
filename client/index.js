import 'react-hot-loader/patch';
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App.jsx';

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

//this allows the base component to reload with react-hot-loader
if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    const NextApp = require('./components/App.jsx').default;
    ReactDom.render(<NextApp />, document.getElementById('root'));
  })
}