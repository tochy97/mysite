import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/actionCreators/authActionCreators';

function NavComp(props) {
    const dispatch = useDispatch();
    const histroy = useNavigate(); 
    const pathname = window.location.pathname

    const { user } = useSelector(
      (state) =>({
        user:state.auth.user, 
    }), shallowEqual);

    const logout = (e) =>{
        e.preventDefault();
        dispatch(logoutUser());
        histroy("../", {replace:true});
    }
    return (
        <nav id="nav" class="fixed top-0 left-0 right-0 w-full opacity-100 bg-black text-white border-solid border-b-2 border-gray-300 grid grid-cols-3 gap-0 shadow-md py-7 z-20">
            <div id="nav-home" class="flex justify-start">
                <Link class="col-span-1 w-1/8 px-9 h-full hover:underline focus:underline active:underline underline-offset-8" to="/home">Home</Link>
            </div>
            {
                user
                ?
                <>
                <div id="nav-home" class="flex justify-center">
                    Welcom, {user.username}
                </div>
                <div id="nav-login" class="flex justify-end">
                    <button class="col-span-1 col-start-3 w-1/8 px-9 place-content-center h-full hover:underline focus:underline active:underline underline-offset-8 transition duration-500" onClick={logout}>Logout</button>
                </div>
                </>
                :
                <>
                <div id="nav-home" class="flex justify-center">
                    Welcome, guest
                </div>
                {
                    pathname.includes("login") || pathname === "/"
                    ?
                    <div id="nav-signup" class="flex justify-end">
                        <Link class="col-span-1 col-start-3 w-1/8 px-9 place-content-center h-full hover:underline focus:underline active:underline underline-offset-8 transition duration-500" to="signup">Signup</Link>
                    </div>
                    :
                    <div id="nav-login" class="flex justify-end">
                        <Link class="col-span-1 col-start-3 w-1/8 px-9 place-content-center h-full hover:underline focus:underline active:underline underline-offset-8 transition duration-500" to="login">Login</Link>
                    </div>
                }
                </>
            }
        </nav>
    );
}

export default NavComp;