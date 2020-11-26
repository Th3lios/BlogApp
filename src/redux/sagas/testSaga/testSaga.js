import {put, call, takeLatest} from 'redux-saga/effects';

// actions
import * as actionTypes from '../../actions/testAction/testAction';

// api call
import api from '../../api/api';

function* setTestValue() {
  try {
    yield put({type: actionTypes.TEST_ACTION, data: true});
  } catch (error) {
    console.log(error);
  }
}

// watcher
export default function* test() {
  yield takeLatest(actionTypes.TEST_ACTION, setTestValue);
}
