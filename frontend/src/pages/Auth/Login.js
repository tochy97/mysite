import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from '../../redux/actionCreators/authActionCreators';
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [passwordShown, setPasswordShown] = useState(false);
 
    const { status, error } = useSelector(
      (state) =>({
        status:state.auth.status, 
        error:state.auth.error,
    }), shallowEqual);
    
    const dispatch = useDispatch();
    const histroy = useNavigate();
    
    const togglePassword = (e) => {
        e.preventDefault()
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setPasswordShown(!passwordShown);
      return;
    };
    
    const handleSubmit = (e) => {
        const data = {
            username: username,
            password: password
        }
        dispatch(loginUser(data));
        if(!status)
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
            <div class="col-span-6 grid gap-4 grid-cols-6">
                <input class="border border-gray-300 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" type="text" id="user" name="user" placeholder='Username or Email' value={username} onChange={e => setUsername(e.target.value)}/>
                <div class="lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 flex border-2 border-gray-200 hover:border-gray-300 rounded">
                    <input type={passwordShown ? "text" : "password"}  class="px-4 py-2 w-64 flex-1" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <div class="flex-none p-3" onClick={e=>setPasswordShown(!passwordShown)}>
                        {passwordShown ? <AiFillEye/> : <AiOutlineEyeInvisible/>}
                    </div>
                </div>
                <button class="border border-gray-300 rounded py-3 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 hover:border-2 hover:underline underline-offset-8" onClick={handleSubmit}>Login</button>
                <p class="lg:col-start-3 lg:col-span-2 col-start-2 col-span-4">Need an account - <Link to="../signup" class="hover:underline">Signup</Link></p>
            </div>
        </div>
    );
}

export default Login;