
import { NOTE_CREATE_FAIL, NOTE_CREATE_REQUEST, NOTE_CREATE_SUCESS, NOTE_LIST_FAIL, NOTE_LIST_REQUEST, NOTE_LIST_SUCESS } from "../constants/noteConstants"
import axios from "axios";

export const listNotes = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: NOTE_LIST_REQUEST
        });
        const {
            userLogin: { userInfo }
        } = getState();
        

        const UInfo = JSON.parse(localStorage.getItem("userInfo"));

        const config = {
            headers: {
                Authorization: `Bearer ${UInfo.token}`,
            }
        }
        const { data } = await axios.get(`/api/notes`, config);
        dispatch({
            type: NOTE_LIST_SUCESS,
            payload: data
        })

    }
    catch (error) {
        const message =
            error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        dispatch({
            type: NOTE_LIST_FAIL,
            payload: message
        })
    }
}
export const createNotesData =  (title, content, category) => async(dispatch,getState)=> {
    try {
        dispatch({
            type: NOTE_CREATE_REQUEST
        });
        const UInfo = JSON.parse(localStorage.getItem("userInfo"));
        const {
            userLogin: { userInfo } } = getState()
    const config = {
        headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${UInfo.token}`
        }
    }
    const { data } = await axios.post(`/api/notes/create`, { title, content, category }, config)
    dispatch({
        type: NOTE_CREATE_SUCESS, payload: data
    })

}
 catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    dispatch (
        { type:NOTE_CREATE_FAIL, payload : message})
}

}