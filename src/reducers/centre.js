import {
    REQUEST_CENTRE_SUCCESS,
    REQUEST_CENTRE_BY_DIST_FAILED,
    REQUEST_CENTRE_BY_PIN_FAILED
} from '../actions/action-types'

const INITIAL_STATE = {
    centres: {},
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_CENTRE_SUCCESS:
            return {
                ...state,
                centres: action.centres
            }
        case REQUEST_CENTRE_BY_DIST_FAILED:
            return {
                ...state,
                centres: action.centres
            }
        case REQUEST_CENTRE_BY_PIN_FAILED:
            return {
                ...state,
                centres: action.centres
            }
        default: return state
    }
}