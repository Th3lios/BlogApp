import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import reduxSaga from 'redux-saga'
import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = reduxSaga()

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)
  const persistor = persistStore(store)
  return { store, persistor }
}