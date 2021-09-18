import { combineReducers } from 'redux'
import auth from './auth'
import centre from './centre'
import states from './states'
import districts from './districts'

export default combineReducers({
    auth,
    centre,
    states,
    districts,
})