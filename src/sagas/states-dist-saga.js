import {
    call,
    takeLatest,
    put,
    all
} from 'redux-saga/effects'

import {
    REQUEST_STATE_LIST,
    REQUEST_STATE_LIST_SUCCESS,
    REQUEST_STATE_LIST_FAILED,
    REQUEST_DIST_LIST,
    REQUEST_DIST_LIST_SUCCESS,
    REQUEST_DIST_LIST_FAILED
} from '../actions/action-types'

import { StateListApi } from '../api/state-list-api'
import { DistListApi } from '../api/dist-list-api'
import { AppConstants } from '../app-constants/app-constants'

function* requestStateList() {
    try {
        const response = yield call(StateListApi.requestStateList)
        if (response.hasOwnProperty('states')) {

            yield put({ type: REQUEST_STATE_LIST_SUCCESS, stateList: { success: true, data: response.states, time: new Date() } })
        } else {
            yield put({ type: REQUEST_STATE_LIST_FAILED, stateList: { success: false, errorMsg: AppConstants.DEFAULT_ERROR_MESSAGE, time: new Date() } })
        }
    } catch (e) {
        yield put({ type: REQUEST_STATE_LIST_FAILED, stateList: { success: false, errorMsg: AppConstants.DEFAULT_ERROR_MESSAGE, time: new Date() } })
    }
}

function* requestDistList({ payload }) {
    try {
        const response = yield call(DistListApi.requestDistList, payload)
        if (response.hasOwnProperty('districts')) {
            yield put({ type: REQUEST_DIST_LIST_SUCCESS, distList: { success: true, data: response.districts, time: new Date() } })
        } else {
            yield put({ type: REQUEST_DIST_LIST_FAILED, distList: { success: false, errorMsg: AppConstants.DEFAULT_ERROR_MESSAGE, time: new Date() } })
        }
    } catch (e) {
        yield put({ type: REQUEST_DIST_LIST_FAILED, distList: { success: false, errorMsg: AppConstants.DEFAULT_ERROR_MESSAGE, time: new Date() } })
    }
}

function* StateSaga() {
    yield all([
        takeLatest(REQUEST_STATE_LIST, requestStateList),
        takeLatest(REQUEST_DIST_LIST, requestDistList)
    ])
}

export default StateSaga