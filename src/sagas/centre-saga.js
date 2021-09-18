import {
    all,
    put,
    call,
    takeLatest
} from 'redux-saga/effects'

import {
    REQUEST_CENTRE_BY_PIN,
    REQUEST_CENTRE_BY_DIST,
    REQUEST_CENTRE_SUCCESS,
    REQUEST_CENTRE_BY_PIN_FAILED,
    REQUEST_CENTRE_BY_DIST_FAILED
} from '../actions/action-types'

import { CentresApi } from '../api/centres-api'
import { AppConstants } from '../app-constants/app-constants'

function* requestCentreByPin({ payload }) {
    try {
        const response = yield call(CentresApi.requestCentreByPin, payload)
        if (response.hasOwnProperty('centers')) {
            yield put({ type: REQUEST_CENTRE_SUCCESS, centres: { success: true, data: response.centers, time: new Date() } })
        } else {
            yield put({ type: REQUEST_CENTRE_BY_PIN_FAILED, centers: { success: false, errorMsg: AppConstants.DEFAULT_ERROR_MESSAGE, time: new Date() } })
        }
    } catch (error) {
        yield put({ type: REQUEST_CENTRE_BY_PIN_FAILED, centers: { success: false, errorMsg: AppConstants.DEFAULT_ERROR_MESSAGE, time: new Date() } })
    }
}

function* requestCentreByDist({ payload }) {
    try {
        const response = yield call(CentresApi.requestCentreByDist, payload)
        if (response.hasOwnProperty('centers')) {
            yield put({ type: REQUEST_CENTRE_SUCCESS, centres: { success: true, data: response.centers, time: new Date() } })
        } else {
            yield put({ type: REQUEST_CENTRE_BY_DIST_FAILED, centers: { success: false, errorMsg: AppConstants.DEFAULT_ERROR_MESSAGE, time: new Date() } })
        }
    } catch (error) {
        yield put({ type: REQUEST_CENTRE_BY_DIST_FAILED, centers: { success: false, errorMsg: AppConstants.DEFAULT_ERROR_MESSAGE, time: new Date() } })
    }
}


function* CentreSaga() {
    yield all([
        takeLatest(REQUEST_CENTRE_BY_PIN, requestCentreByPin),
        takeLatest(REQUEST_CENTRE_BY_DIST, requestCentreByDist)
    ])
}

export default CentreSaga