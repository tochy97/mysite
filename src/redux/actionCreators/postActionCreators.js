import * as types from "../types/postTypes";
import axios from 'axios';
import { setError } from "./authActionCreators";

const setPost = (data)=>({
    type:types.SET_POST,
    payload:data
})
const addPost = ( data ) => ({
    type:types.ADD_POST,
    payload:data
})
export const setMount = (data)=>({
    type:types.SET_MOUNT,
    payload:data
})

export const fetchPosts = () => async dispatch => {
    await axios.get("http://54.85.226.96:8000/posts/", {
        headers:{
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('token')}`,
        }
    })
    .then((res) => {
        dispatch(setPost(res.data));
        const info= {
            error:null,
            status:101
        }
        dispatch(setError(info));
    })
    .catch(err => {
        const info= {
            error:"Failed to retrieve posts",
            status:err.response.status
        }
        dispatch(setError(info));
        alert(info.error);
    })
}

export const fetchPostsNoUser = () => async dispatch => {
    await axios.get("http://54.85.226.96:8000/posts/", {
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then((res) => {
        dispatch(setPost(res.data));
        const info= {
            error:null,
            status:101
        }
        dispatch(setError(info));
    })
    .catch(err => {
        const info= {
            error:"Failed to retrieve posts",
            status:err.response.status
        }
        dispatch(setError(info));
        alert(info.error);
    })
}

export const newPost = ( data ) => async dispatch => {
    const form_data = JSON.stringify(data)
    await axios.post("http://54.85.226.96:8000/posts/", form_data, {
        headers:{
            Authorization: `JWT ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    })
    .then((res) => {
        dispatch(addPost(res.data));
    })
    .catch(err => {
        const info= {
            error:"Failed to create post",
            status:err.response.status
        }
        dispatch(setError(info));
        alert(info.error);
    })
}

export const removePost = ( postID ) => async dispatch => {
    await axios.delete(`http://54.85.226.96:8000/posts/${postID}/`, {
        headers:{
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('token')}`,
        }
    })
    .then(() => {
        dispatch(fetchPosts());
    })
    .catch(err => {
        const info= {
            error:"Failed to delete class",
            status:err.response.status
        }
        dispatch(setError(info));
        alert(info.error);
    })
}

export const editPost = ( data, id ) => async dispatch => {
    const form_data = JSON.stringify(data)
    await axios.put(`http://54.85.226.96:8000/posts/${id}/`, form_data, {
        headers:{
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('token')}`,
        }
    })
    .then(() => {
        dispatch(fetchPosts());
    })
    .catch(err => {
        const info= {
            error:"Failed to delete class",
            status:err.response.status
        }
        dispatch(setError(info));
        alert(info.error);
    })
}