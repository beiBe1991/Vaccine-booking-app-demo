import { AppConstants } from "../app-constants/app-constants";

export const StateListApi = {
    requestStateList: async () => {
        return fetch(`${AppConstants.STATE_API_URL}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        }).then((res) => {
            return res.json()
        }).catch((e) => {
            console.log(e)
        })
    }
}