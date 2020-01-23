import React from 'react';
import ReactDOM from 'react-dom';
import Testey from './Testey';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import rootReducer from './reducer/'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(rootReducer)

function App(){
    return(
        <div className='App'>
            <Testey />
        </div>
    )
}
const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
