import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { createUser, setError } from '../../redux/actionCreators/authActionCreators';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import PasswordChecklist from "react-password-checklist";
import Loading from '../Messages/Loading';

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [cpasswordShown, setCPasswordShown] = useState(false);

    const dispatch = useDispatch();
    const histroy = useNavigate();

    const { status, error, isLoggedIn, mounted } = useSelector(
        (state) => ({
            status: state.auth.status,
            error: state.auth.error,
            isLoggedIn: state.auth.isLoggedIn,
            mounted: state.auth.mounted,
        }), shallowEqual);


    useEffect(() => {
        if (isLoggedIn) {
            histroy("../", { replace: true });
        }
    }, [isLoggedIn])

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            username: username,
            password: password,
            first_name: fname,
            last_name: lname,
            email: email,
        }
        if (cpassword !== password) {
            const info = {
                error: "Passwords do not match",
                status: 999
            }
            dispatch(setError(info));
            alert(info.error)
        }
        else if (username.length < 1) {
            const info = {
                error: "This field is required",
                status: 998
            }
            dispatch(setError(info));
            alert(info.error)
        }
        else if (email.length < 1) {
            const info = {
                error: "This field is required",
                status: 997
            }
            dispatch(setError(info));
            alert(info.error)
        }
        else if (password.length < 1) {
            const info = {
                error: "This field is required",
                status: 996
            }
            dispatch(setError(info));
            alert(info.error)
        }
        else if (cpassword.length < 1) {
            const info = {
                error: "This field is required",
                status: 995
            }
            dispatch(setError(info));
            alert(info.error)
        }
        else if (fname.length < 1) {
            const info = {
                error: "This field is required",
                status: 994
            }
            dispatch(setError(info));
            alert(info.error)
        }
        else if (lname.length < 1) {
            const info = {
                error: "This field is required",
                status: 993
            }
            dispatch(setError(info));
            alert(info.error)
        }
        else {
            dispatch(createUser(data));
        }
        e.preventDefault()
    }
    console.log(isLoggedIn)

    return (
        <div class="grid gap-4 grid-cols-6 w-full mt-16">
            <p class="text-7xl text-center col-start-2 col-span-4">Signup</p>
            {
                mounted ?
                    <form class="col-span-6 grid gap-4 grid-cols-6" onSubmit={handleSubmit}>
                        <input class={status === 998 ? "border border-red-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" : "border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4"} type="text" id="username" name="username" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} required />
                        <input class={status === 997 ? "border border-red-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" : "border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4"} type="email" id="email" name="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required />
                        <input class={status === 994 ? "border border-red-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" : "border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4"} type="text" id="fname" name="fname" placeholder='First Name' value={fname} onChange={e => setFname(e.target.value)} required />
                        <input class={status === 993 ? "border border-red-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" : "border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4"} type="text" id="lname" name="lname" placeholder='Last Name' value={lname} onChange={e => setLname(e.target.value)} required />
                        <div class={status === 999 || status === 996 ? "lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 flex border-2 border-red-300 hover:border-gray-300 rounded" : "lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 flex border-2 border-gray-200 hover:border-gray-300 rounded"}>
                            <input type={passwordShown ? "text" : "password"} class="px-4 py-2 w-64 flex-1" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                            <div class="flex-none p-3" onClick={e => setPasswordShown(!passwordShown)}>
                                {passwordShown ? <AiFillEye /> : <AiOutlineEyeInvisible />}
                            </div>
                        </div>
                        <div class={status === 999 || status === 995 ? "lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 flex border-2 border-red-300 hover:border-gray-300 rounded" : "lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 flex border-2 border-gray-200 hover:border-gray-300 rounded"}>
                            <input type={cpasswordShown ? "text" : "password"} class="px-4 py-2 w-64 flex-1" placeholder="Confirm Password" value={cpassword} onChange={e => setCPassword(e.target.value)} required />
                            <div class="flex-none p-3" onClick={e => setCPasswordShown(!cpasswordShown)}>
                                {cpasswordShown ? <AiFillEye /> : <AiOutlineEyeInvisible />}
                            </div>
                        </div>
                        <div class="lg:col-start-3 lg:col-span-2 col-start-2 col-span-4">
                            <PasswordChecklist
                                rules={["minLength", "specialChar", "number", "capital", "match", "lowercase", "notEmpty"]}
                                minLength={7}
                                value={password}
                                valueAgain={cpassword}
                                onChange={(isValid) => { }}
                            />
                        </div>
                        <button class="border border-gray-300 rounded py-3 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 hover:border-2 hover:underline underline-offset-8" type='submit' >Signup</button>
                        <p class="lg:col-start-3 lg:col-span-2 col-start-2 col-span-4">Have an account - <Link to="../login" class="hover:underline">Login</Link></p>
                    </form>
                    :
                    <Loading />
            }
        </div>
    );
}

export default Signup;