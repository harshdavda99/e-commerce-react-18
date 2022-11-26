import { ActionTypes } from '../actions/actiontypes';


const initialstate = {
    register: JSON.parse(localStorage.getItem('userRegister')) || []
}

// const data = localStorage.getItem('userRegister');


const Database = (state = initialstate, {type , payload} ) =>{
    switch (type) {
        case ActionTypes.GET_REGISTER:
             return state;
        case ActionTypes.LOG_IN :
             return state;
        case ActionTypes.SIGN_UP :
             return state;
        default : return state;
     }
}

export default Database;