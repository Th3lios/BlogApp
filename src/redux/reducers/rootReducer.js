import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

// reducers
import {menuReducer} from './modalReducer/modalReducer';

export default combineReducers({
  modal: persistReducer(
    {
      key: 'modal',
      storage: AsyncStorage,
      blacklist: ['action'],
    },
    menuReducer,
  ),
});
