import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div class="grid gap-4 grid-cols-6 w-full">
            <p class="text-7xl text-center col-start-2 col-span-4">Login</p>
            <form class="col-span-6 grid gap-4 grid-cols-6">
                <input class="border border-gray-300 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" type="email" id="lname" name="lname" placeholder='Email'/>
                <input class="border border-gray-300 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" type="password" id="lname" name="lname" placeholder='Password'/>
                <button class="border border-gray-300 rounded py-3 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 hover:border-2 hover:underline underline-offset-8" type='submit'>Login</button>
                <p class="lg:col-start-3 lg:col-span-2 col-start-2 col-span-4">Need an account - <Link to="../signup" class="hover:underline">Signup</Link></p>
            </form>
        </div>
    );
}

export default Login;