import * as types from "../types/authTypes";
import axios from 'axios';

const setUser = (data)=>({
    type:types.SET_USER,
    payload:data
})
export const setError = (data)=>({
    type:types.SET_ERROR,
    payload:data
})
const resetUser = ()=>({
    type:types.RESET_USER,
})
export const setMount = (data)=>({
    type:types.SET_MOUNT,
    payload:data
})
export const setAllowed = (data)=>({
    type:types.SET_ALLOWED,
    payload:data
})

export const checkUser = ()  => async dispatch=>{
    await axios.get('http://127.0.0.1:8000/currentuser/', {
        headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`,
        }
    })
    .then(res => {
        const user = {
            id:res.data.id,
            username:res.data.username,
            fname:res.data.first_name,
            lname:res.data.last_name,
            email:res.data.email,
            admin:res.data.is_staff,
        }
        const data = {
            user:user,
            status:101
        }
        dispatch(setUser(data));
    })
    .catch(err => {   
        localStorage.removeItem('token');
        const info= {
            error:"You are notlogged in ",
            status:401
        }
        dispatch(setError(info));
    }); 
}


export const loginUser = (data) => async dispatch=>{
    const formData = JSON.stringify(data)
    await axios.post("http://127.0.0.1:8000/auth/", formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => {
        localStorage.setItem('token', res.data.token);
        const info= {
            error:"Invalid username or password",
            status:402
        }
        dispatch(setError(info))
        dispatch(checkUser(data));
    })
    .catch(err => {
        localStorage.removeItem('token');
        const info= {
            error:"Invalid username or password",
            status:402
        }
        dispatch(setError(info))
        alert(info.error)
    });
}

export const createUser = (data) =>  async dispatch=>{
    const formData = JSON.stringify(data)
    await axios.post("http://127.0.0.1:8000/createuser/", formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch(checkUser());
    })
    .catch(err => {
        localStorage.removeItem('token');
        const info= {
            error:err.response.data.username,
            status:403
        }
        dispatch(setError(info))
    });
}

export const logoutUser = () => dispatch=>{
    localStorage.removeItem('token');
    dispatch(resetUser());
}

export const updateUser = ( data, id ) => async dispatch => {
    const form_data = JSON.stringify(data)
    await axios.put(`http://127.0.0.1:8000/userapi/${id}/`, form_data, {
        headers:{
            Authorization: `JWT ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        dispatch(checkUser());
    })
    .catch(err => {
        const info= {
            error:"Failed to send",
            status:404
        }
        dispatch(setError(info));
    })
}