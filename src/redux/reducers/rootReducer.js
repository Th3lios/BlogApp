import AsyncStorage from '@react-native-community/async-storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

// reducers
import { testReducer } from './testReducer/testReducer'
import { menuReducer } from './modalReducer/modalReducer'


export default combineReducers({
  test: persistReducer({
    key: 'test',
    storage: AsyncStorage
  }, testReducer),
  modal: persistReducer({
    key: 'modal',
    storage: AsyncStorage,
    blacklist: ['action']
  }, menuReducer),
})