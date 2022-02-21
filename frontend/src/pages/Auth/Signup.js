import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [cpassword, setCPassword] = useState(""); 
    const [passwordShown, setPasswordShown] = useState(false);
    return (
        <div class="grid gap-4 grid-cols-6 w-full mt-16">
            <p class="text-7xl text-center col-start-2 col-span-4">Signup</p>
            <form class="col-span-6 grid gap-4 grid-cols-6">
                <input class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" type="email" id="email" name="email" placeholder='Email'/>
                <input class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-1 col-start-2 col-span-4" type="text" id="fname" name="fname" placeholder='First Name'/>
                <input class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-4 lg:col-span-1 col-start-2 col-span-4" type="text" id="lname" name="lname" placeholder='Last Name'/>
                <div class="lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 flex border-2 border-gray-200 hover:border-gray-300 rounded">
                    <input type={passwordShown ? "text" : "password"}  class="px-4 py-2 w-64 flex-1" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <div class="flex-none p-3" onClick={e=>setPasswordShown(!passwordShown)}>
                        {passwordShown ? <AiFillEye/> : <AiOutlineEyeInvisible/>}
                    </div>
                </div>
                <div class="lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 flex border-2 border-gray-200 hover:border-gray-300 rounded">
                    <input type={passwordShown ? "text" : "password"}  class="px-4 py-2 w-64 flex-1" placeholder="Confirm Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <div class="flex-none p-3" onClick={e=>setPasswordShown(!passwordShown)}>
                        {passwordShown ? <AiFillEye/> : <AiOutlineEyeInvisible/>}
                    </div>
                </div>
                <button class="border border-gray-300 rounded py-3 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 hover:border-2 hover:underline underline-offset-8" type='submit'>Signup</button>
                <p class="lg:col-start-3 lg:col-span-2 col-start-2 col-span-4">Have an account - <Link to="../login" class="hover:underline">Login</Link></p>
            </form>
        </div>
    );
}

export default Signup;