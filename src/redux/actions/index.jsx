import {ActionTypes} from './actiontypes'

export const getRegister = (userlist) =>{
    return {
        type: "GETREGISTER",
        payload: userlist,
    }  
}
export const GetRegister = (data ) =>{
    return {
        type: ActionTypes.GET_REGISTER,
        payload: data
    } 
}

export const LogIn = (data) =>{
    return {
        type: ActionTypes.GET_REGISTER,
        payload: data,
    } 
}