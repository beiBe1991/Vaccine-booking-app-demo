import { fork, all } from 'redux-saga/effects'
import authSaga from './auth-saga'
import centreSaga from './centre-saga'
import stateDistSaga from './states-dist-saga'

export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(centreSaga),
        fork(stateDistSaga)
    ])
}