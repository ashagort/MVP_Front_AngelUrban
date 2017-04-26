import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

require("./stylesGlobal/global.less");

injectTapEventPlugin();

import configureStore from './store';

import IndexContainer from './container/IndexContainer';

const store = configureStore();

let rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <MuiThemeProvider>
        <IndexContainer/>
        </MuiThemeProvider>
    </Provider>,
    rootElement
);