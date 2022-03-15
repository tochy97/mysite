import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from '../../redux/actionCreators/authActionCreators';
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [passwordShown, setPasswordShown] = useState(false);
 
    const { status } = useSelector(
      (state) =>({
        status:state.auth.status,
    }), shallowEqual);
    
    const dispatch = useDispatch();
    const histroy = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            username: username,
            password: password
        }
        dispatch(loginUser(data));
        if(status === 101)
        {
            histroy("../", {replace:true});
        }
        else{
            e.preventDefault()
        }
    }

    return (
        <div class="grid gap-4 grid-cols-6 w-full">
            <p class="text-7xl text-center col-start-2 col-span-4">Login</p>         
            <form class="col-span-6 grid gap-4 grid-cols-6" onSubmit={handleSubmit}>
                <input class="border border-gray-300 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" type="text" id="user" name="user" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>
                <div class="lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 flex border-2 border-gray-200 hover:border-gray-300 rounded">
                    <input type={passwordShown ? "text" : "password"}  class="px-4 py-2 w-64 flex-1" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <div class="flex-none p-3" onClick={e=>setPasswordShown(!passwordShown)}>
                        {passwordShown ? <AiFillEye/> : <AiOutlineEyeInvisible/>}
                    </div>
                </div>
                <button type='submit' class="border border-gray-300 rounded py-3 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 hover:border-2 hover:underline underline-offset-8">Login</button>
                <p class="lg:col-start-3 lg:col-span-2 col-start-2 col-span-4">Need an account - <Link to="../signup" class="hover:underline">Signup</Link></p>
            </form>
        </div>
    );
}

export default Login;