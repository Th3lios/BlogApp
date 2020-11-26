import {all} from 'redux-saga/effects';

// sagas
import modal from './modalSaga/modalSaga';

export default function* rootSaga() {
  yield all([modal()]);
}
