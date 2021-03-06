import './App.css';

import React from 'react';
import Receiver from './components/Receiver/Receiver';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Sender } from './components/Sender/Sender.jsx';

class App extends React.Component {
  render () {
    return (
      <div className='App p-2'>
        <Provider store={store}>
          <h4>Hello World</h4>
          <Receiver />
          <br />
          <Sender />
        </Provider>
      </div>
    );
  }
}

export default App;
