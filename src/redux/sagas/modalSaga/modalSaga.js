import {put, call, takeLatest} from 'redux-saga/effects';

// actions
import * as actionTypes from '../../actions/modalAction/modalAction';

// api call
import api from '../../api/api';

function* setMenuModal(value) {
  try {
    console.log(value);
    yield put({type: actionTypes.SET_MENU_MODAL_STATE, data: value});
  } catch (error) {
    console.log(error);
  }
}

// watcher
export default function* modal() {
  yield takeLatest(actionTypes.SET_MENU_MODAL_STATE, setMenuModal);
}
