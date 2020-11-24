import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from './src/redux/store/configureStore'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'

const { store, persistor } = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
