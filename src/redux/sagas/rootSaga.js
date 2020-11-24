import { all } from 'redux-saga/effects'

// sagas
import testSaga from './testSaga/testSaga'

export default function* rootSaga() {
  yield all ([
    testSaga()
  ])
}