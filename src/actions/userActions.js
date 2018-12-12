import axios from 'axios';
import { AUTH_URL } from '../constants';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
})

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,
    user: undefined
})



/* função para fazer login */
export const tryLogin = ( email, password ) => dispatch => {
    const queryString = require('query-string');
    /*
    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      };
      */
    
    const body = {
        email: email,
        password: password

    };

    //console.log(body, AUTH_URL);
  
    return axios.post(AUTH_URL, queryString.stringify(body))
    .then(res => {
        //console.log(res.data);

        const { object } = res.data;
        const { token } = res.data;            
        const userName = object.name;
        const email = object.email;            
        const avatar = object.avatar;

        const user = {
            name: userName,
            email: email,
            avatar: avatar,
            token: token    
        };
        
        //console.log(user);

        const action = userLoginSuccess(user);
        //const action = userLoginSuccess(res);
        dispatch(action);
        
    }).catch(error => {
        //console.log(error);
        return Promise.reject(error);
    });
}


/* função para fazer logout */
export const doLogout = () => dispatch => {
    const action = userLogout();        
    dispatch(action);
}