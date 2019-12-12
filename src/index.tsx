import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { configureStore } from './ReduxStore';
import { Provider } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaLayerGroup } from 'react-icons/fa';

const store = configureStore();

const Root = () => (
    <Provider store = { store }>
        <App />
    </Provider>
);

render(<Root />, document.getElementById("root"));