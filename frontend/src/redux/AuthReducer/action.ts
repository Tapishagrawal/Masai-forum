import axios from "axios";
import { LOGIN_POST_REQUEST, LOGIN_POST_SUCCESS, LOGIN_POST_FAILURE } from "../actionType";
import { Dispatch } from "redux";

export interface CredentialType {
    email: string;
    password: string;
}

export const handlePostLogin = (usercredential: CredentialType, toast:any, navigate:any) => async (dispatch: Dispatch): Promise<void> => {
    let loading = toast.loading("Loading...")
    try {
        dispatch({ type: LOGIN_POST_REQUEST });
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, usercredential);
        localStorage.setItem("token", JSON.stringify(res.data.data.token))
        localStorage.setItem("userData", JSON.stringify(res.data.data.user))
        dispatch({ type: LOGIN_POST_SUCCESS, payload: { token: res.data.data.token, userData: res.data.data.user } });
        toast.dismiss(loading)
        toast.success("You are login successfully!")
        setTimeout(()=>{
            navigate("/feed")
        },1500)
    } catch (error) {
        console.error(error);
        toast.dismiss(loading)
        toast.error("Wrong Credential!")
        dispatch({ type: LOGIN_POST_FAILURE });
    }
};
