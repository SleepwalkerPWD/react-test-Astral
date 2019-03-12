import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';

import App from './components/app';

const store = configureStore();

ReactDOM.render( <Provider store={store}>
                 <App />
                 </Provider>, document.getElementById('root'));