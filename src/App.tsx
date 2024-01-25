import React from 'react';
import TickersView from './components/TickersView';
import store from './app/redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <TickersView />
    </Provider>
  );
}

export default App;
