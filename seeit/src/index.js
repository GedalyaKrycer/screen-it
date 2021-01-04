import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import modalReducer from './store/reducers/modalReducer';
import formReducer from './store/reducers/formReducer';
import resultsReducer from './store/reducers/resultsReducer';

// All reducers are combined into a single Root Reducer
const rootReducer = combineReducers({
  modal: modalReducer,
  form: formReducer,
  results: resultsReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
  rootReducer,
  composeEnhancers()
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

