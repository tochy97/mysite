import { ADD_POST, SET_POST, SET_MOUNT } from "../types/postTypes";

const initialState = {
    mounted: false,
    posts: null,
}

const postReducers = (state=initialState, {type, payload})=>{
    switch(type){
        case ADD_POST:
            state={
                posts:[...state.classes,payload]
            }
            return state;
        case SET_POST:
            state={ ...state,
                mounted:true,
                posts:payload,
            }
            return state;
        case SET_MOUNT:
            state={ ...state,
                mounted:payload
            }
            return state;
        default:
            return state;
    }
}

export default postReducers;