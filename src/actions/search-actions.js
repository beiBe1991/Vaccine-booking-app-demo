import {
    REQUEST_CENTRE_BY_PIN,
    REQUEST_CENTRE_BY_DIST,
    REQUEST_DIST_LIST
} from "./action-types";

export function requestCentreByPin(payload) {
    return {
        type: REQUEST_CENTRE_BY_PIN,
        payload
    }
}

export function requestCentreByDist(payload){
    return{
        type: REQUEST_CENTRE_BY_DIST,
        payload
    }
}
export function requestDistList(payload){
    return{
        type: REQUEST_DIST_LIST,
        payload
    }
}