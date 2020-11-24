import AsyncStorage from '@react-native-community/async-storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

// reducers
import { testReducer } from './testReducer/testReducer'


export default combineReducers({
  test: persistReducer({
    key: 'test',
    storage: AsyncStorage
  }, testReducer)
})