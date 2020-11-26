import { valueOf } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes';
import {put, call, takeLatest} from 'redux-saga/effects';

// actions
import * as actionTypes from '../../actions/modalAction/modalAction';

// api call
import api from '../../api/api';

function* setMenuModal(action) {
  try {
    console.log(action);
    yield put({type: actionTypes.SET_MENU_MODAL_STATE, data: action.data});
  } catch (error) {
    console.log(error);
  }
}

// watcher
export default function* modal() {
  yield takeLatest(actionTypes.SET_MENU_MODAL, setMenuModal);
}
