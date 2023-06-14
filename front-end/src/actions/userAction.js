import { USER_LOGIN_REQUEST, USER_LOGIN_SUCESS,USER_LOGIN_FAIL,USER_LOGOUT } from "../constants/userConstants"
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const config = {
            header: {
                "Content-type": "application/json"
            }
        }
        const { data } = await axios.post("/api/users/login", { email, password }, config)
        console.log(data, email, password )
        dispatch({type:USER_LOGIN_SUCESS,payload:data})
        if (data === "Invalid email or password")
            throw new Error(data);
            console.log("Set the item")
        localStorage.setItem('userInfo', JSON.stringify(data));
    }

    catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
    }
}

export const  logout=()=>async (dispatch)=>{
localStorage.removeItem("userInfo");
dispatch({type:USER_LOGOUT});
}