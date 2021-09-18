import { AppConstants } from "../app-constants/app-constants";

export const DistListApi = {
    requestDistList: async (payload) => {
        return fetch(`${AppConstants.DIST_LIST_API_URL}/${payload.state_id}`, {
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