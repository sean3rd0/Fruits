import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./redux/store"
import Component from "./Components/Component"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Component />
      </div>
    </Provider>
  );
}

export default App
