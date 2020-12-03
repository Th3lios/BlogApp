import {valueOf} from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes';
import {put, call, takeLatest} from 'redux-saga/effects';

// actions
import * as actionTypes from '../../actions/modalAction/modalAction';

// api call
import {apiCall} from '../../api/api';

function* setMenuModal(action) {
  try {
    yield put({type: actionTypes.SET_MENU_MODAL_STATE, data: action.data});
  } catch (error) {
    console.log(error);
  }
}

function* setPanStatus(action) {
  try {
    yield put({type: actionTypes.SET_PAN_STATUS_REDUCER, data: action.data});
  } catch (error) {
    console.log(error);
  }
}

function* getUsers(action) {
  try {
    const result = yield call(apiCall, 'get', 'https://randomuser.me/api/?ext');
    console.log(result);
    yield put({type: actionTypes.GET_USERS_REDUCER, data: result});
  } catch (error) {
    console.log(error);
  }
}

// watcher
export default function* modal() {
  yield takeLatest(actionTypes.SET_MENU_MODAL, setMenuModal);
  yield takeLatest(actionTypes.GET_USERS_SAGA, getUsers);
  yield takeLatest(actionTypes.SET_PAN_STATUS_SAGA, setPanStatus);
}
