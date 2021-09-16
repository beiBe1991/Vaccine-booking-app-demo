import {
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../actions/action-types'

const INITIAL_STATE = {
    loginResponse: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginResponse: action.loginResponse
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loginResponse: action.loginResponse
            }
        default: return state
    }
}