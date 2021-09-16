import {REQUEST_LOGIN} from './action-types'

export function requestLogin(payload){
    return {
        type: REQUEST_LOGIN,
        payload
    }
}