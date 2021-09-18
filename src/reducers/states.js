import {
    REQUEST_STATE_LIST_SUCCESS,
    REQUEST_STATE_LIST_FAILED
} from '../actions/action-types'

const INITIAL_STATE = {
    stateList: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_STATE_LIST_SUCCESS:
            return {
                ...state,
                stateList: action.stateList
            }
        case REQUEST_STATE_LIST_FAILED:
            return {
                ...state,
                stateList: action.stateList
            }
        default: return state
    }
}
