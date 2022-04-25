import { SET_USER, SET_ERROR, RESET_USER, SET_MOUNT, SET_ALLOWED, SET_EMAIL } from "../types/authTypes";

const initialState = {
    isLoggedIn: false,
    mounted: false,
    user: null,
    status: null,
    error: null,
    email: false,
}

const authReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            state = {
                ...state,
                isLoggedIn: true,
                user: payload.user,
                error: null,
                mounted: true,
                status: payload.status,
            }
            return state;
        case SET_MOUNT:
            state = {
                ...state,
                mounted: payload
            }
            return state;
        case SET_ALLOWED:
            state = {
                ...state,
                allowed: payload
            }
            return state;
        case SET_EMAIL:
            state = {
                ...state,
                email: payload
            }
            return state;
        case SET_ERROR:
            state = {
                ...state,
                mounted: true,
                error: payload.error,
                status: payload.status
            }
            return state;
        case RESET_USER:
            state = initialState;
            return state;
        default:
            return state;
    }
}

export default authReducers;