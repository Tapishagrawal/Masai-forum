import { LOGIN_POST_FAILURE, LOGIN_POST_REQUEST, LOGIN_POST_SUCCESS } from "../actionType"

interface UserData {
    _id: string,
    username: string
    email: string,
    password: string,
    avatar: string,
}

interface Action {
    type: string;
    payload: {
        userData: UserData;
        token: string;
    };
}

const tokenFromStorage = localStorage.getItem("token");
const userDataFromStorage = localStorage.getItem("userData");

const initState = {
    token: tokenFromStorage ? JSON.parse(tokenFromStorage) : "",
    userData: userDataFromStorage ? JSON.parse(userDataFromStorage) : null,
    isLoading: false,
    isError: false,
};

export const reducer = (state = initState, { type, payload }: Action) => {
    switch (type) {
        case LOGIN_POST_REQUEST: {
            return { ...state, isLoading: true }
        }
        case LOGIN_POST_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }
        case LOGIN_POST_SUCCESS: {
            return { ...state, isLoading: false, userData: payload.userData, token: payload.token }
        }
        default:
            return state
    }
}