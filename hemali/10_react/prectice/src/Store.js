import {createStore} from 'redux'

import rootReducer from "./Reducers/Index";
import { createStoreHook } from 'react-redux';

const store=createStore(rootReducer)

const Store=createStore(rootReducer,window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_());
// appliction ne store karse aa code 

export default store;