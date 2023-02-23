// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// App and CSS
import App from './components/app'
import '../assets/application.scss';

// Redux
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import flatsReducer from './reducers/flats_reducer';

// create a Redux State to store data
const store = configureStore({
  reducer: {
    flats: flatsReducer
  }
})

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
