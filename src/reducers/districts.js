import {
    REQUEST_DIST_LIST_SUCCESS,
    REQUEST_DIST_LIST_FAILED
} from '../actions/action-types'

const INITIAL_STATE = {
    distList:{}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_DIST_LIST_SUCCESS:
            return {
                ...state,
                distList: action.distList
            }
        case REQUEST_DIST_LIST_FAILED:

            return {
                ...state,
                distList: action.distList
            }
        default: return state
    }
}