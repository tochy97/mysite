import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div class="grid gap-4 grid-cols-6 w-full mt-16">
            <p class="text-7xl text-center col-start-2 col-span-4">Signup</p>
            <form class="col-span-6 grid gap-4 grid-cols-6">
                <input class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" type="email" id="email" name="email" placeholder='Email'/>
                <input class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-1 col-start-2 col-span-4" type="text" id="fname" name="fname" placeholder='First Name'/>
                <input class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-4 lg:col-span-1 col-start-2 col-span-4" type="text" id="lname" name="lname" placeholder='Last Name'/>
                <input class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" type="password" id="pword" name="pword" placeholder='Password'/>
                <input class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" type="password" id="cpword" name="cpword" placeholder='Confirm Password'/>
                <p class="lg:col-start-3 lg:col-span-2 col-start-2 col-span-4">Have an account - <Link to="../login" class="hover:underline">Login</Link></p>
            </form>
        </div>
    );
}

export default Signup;