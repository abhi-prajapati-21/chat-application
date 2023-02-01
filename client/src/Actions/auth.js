import * as api from '../api/index'
import { setCurrentUser } from './currentUser';


export const signup = (signupData, navigate) => async (dispatch) => {
      
    try {
        const { data } = await api.signup(signupData);
        console.log(data);
        dispatch({type: 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } catch (error) {
        console.log(error);
    }
     
}

export const login = (loginData, navigate) => {
    console.log(loginData);
    return {type: 'LOGIN', payload: loginData}
    // dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
         
}