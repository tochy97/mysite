import React from 'react';
import { Link } from 'react-router-dom';

function NavComp(props) {
    return (
        <nav id="navbar" class="fixed top-0 left-0 right-0 opacity-100 bg-white grid grid-cols-2 gap-0 shadow-md w-screen py-7 ">
            <div class="flex justify-start">
                <Link class="col-span-1 w-1/8 px-9 h-full hover:underline focus:underline active:underline underline-offset-8" to="/">Home</Link>
            </div>
            <div class="flex justify-end">
                <Link class="col-span-1 col-start-2 w-1/8 px-9 place-content-center h-full hover:underline focus:underline active:underline underline-offset-8 transition duration-500" to="login">Login</Link>
            </div>
        </nav>
    );
}

export default NavComp;