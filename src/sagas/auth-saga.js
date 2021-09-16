import {
    all,
    put,
    call,
    takeLatest
} from 'redux-saga/effects'
import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    REQUEST_LOGIN
} from '../actions/action-types'

import { AuthApi } from '../api/auth-api'

function* userLogin({ payload }) {
    try {
        const loginResponse = yield call(AuthApi.userLogin, payload)
        if (loginResponse.success) {
            yield put({ type: LOGIN_SUCCESS, loginResponse: { success: true, errorMsg: null } })
        } else {
            yield put({ type: LOGIN_FAILED, loginResponse: { success: false, errorMsg: 'Login Failed' } })
        }
    } catch (e) {
        yield put({ type: LOGIN_FAILED, loginResponse: { success: false, errorMsg: 'Unknown Error' } })
    }
}

function* AuthSaga() {
    yield all([
        takeLatest(REQUEST_LOGIN, userLogin)
    ])
}

export default AuthSaga