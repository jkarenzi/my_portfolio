import { createContext, useReducer } from "react";

const decodeJWT = (token) => {
    const parts = token.split('.');
    const payload = parts[1];

    const decodedPayload = atob(payload);

    const jsonPayload = JSON.parse(decodedPayload);

    return jsonPayload.user;
}


export const AuthContext = createContext()

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem("token", action.token)
            return {token: action.token, userInfo: action.userInfo};
        case 'LOGOUT':
            localStorage.removeItem("token")
            return {token: null, userInfo: null};
        default:
            return state   
    }
}
 
export const AuthProvider = ({children}) => {
    const token = localStorage.getItem('token');
    const initialState = {
        token: token || null,
        userInfo: token ? decodeJWT(token) : null,
    };
    
    const [ authData, dispatch ] = useReducer(authReducer, initialState)

    return (
        <AuthContext.Provider value={{...authData, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
}