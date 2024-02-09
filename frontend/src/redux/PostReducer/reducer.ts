import { POST_GET_FAILIUR, POST_GET_SUCCESS, POST_GET_REQUEST, POST_POST_FAILIUR, POST_POST_REQUEST, POST_POST_SUCCESS } from "../actionType"

interface Action {
    type: string,
    payload: any
}
const initState = {
    isLoading: false,
    isError: false,
    postData: []
}
export const reducer = (state = initState, { type, payload }: Action) => {
    switch (type) {
        case POST_POST_REQUEST: {
            return { ...state, isLoading: true }
        }
        case POST_POST_SUCCESS: {
            const updatedData = [...state.postData, payload]
            return { ...state, isLoading: false, postData: updatedData }
        }
        case POST_POST_FAILIUR: {
            return { ...state, isLoading: false, isError: true }
        }
        case POST_GET_REQUEST: {
            return { ...state, isLoading: true }
        }
        case POST_GET_SUCCESS: {
            return { ...state, isLoading: false, postData: payload }
        }
        case POST_GET_FAILIUR: {
            return { ...state, isLoading: false, isError: true }
        }
        default:
            return state
    }
}