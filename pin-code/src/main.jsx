import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import ManageReducer from "./components/Store/reducer.jsx"
import {legacy_createStore as createStore} from 'redux'
let store=createStore(ManageReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)