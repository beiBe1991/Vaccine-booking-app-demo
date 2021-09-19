import { AppConstants } from "../app-constants/app-constants";

export const CentresApi = {

    requestCentreByPin: async (payload) => {
        return fetch(`${AppConstants.API_URL}/appointment/sessions/public/findByPin?pincode=${payload.pincode}&date=20-09-2021`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        }).then((res)=>{
            return res.json();
        }).catch((error)=>{
            console.log(error)
        })
    },
    //Todo: implement requestCentreByDist api
    requestCentreByDist: async (payload) => {
        
        return fetch(`${AppConstants.API_URL}/appointment/sessions/public/calendarByDistrict?district_id=${payload.district_id}&date=20-09-2021`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        }).then((res)=>{
            return res.json();
        }).catch((error)=>{
            console.log(error)
        })
    }
}