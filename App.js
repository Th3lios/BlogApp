import React from 'react';
//import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {configureStore} from './src/redux/store/configureStore';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
// appnavigator
import AppNavigator from './src/navigation/AppNavigator';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/q9y3dqvz94od',
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  headers: {
    Authorization: 'Bearer LknDIIsiikZmxStcUsT3UXI9TN1cRwDOwYtEe9a5q2Y',
  },
});
const {store, persistor} = configureStore();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
//AppRegistry.registerComponent('MyApplication', () => App);
