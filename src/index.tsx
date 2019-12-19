import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { configureStore } from './ReduxStore';
import { Provider } from 'react-redux';
import AppViewInitializer from './AppComponent/AppSmartComponent';

const store = configureStore();

const Root = () => (
    <Provider store = { store }>
        <AppViewInitializer />
    </Provider>
);

render(<Root />, document.getElementById("root"));