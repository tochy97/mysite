import React from 'react';
import { Link } from 'react-router-dom';

function SubNav(props) {
    return (
        <nav id="nav" class="fixed top-20 left-0 right-0 w-full opacity-100 bg-gray-600 text-white border-solid border-b-2 border-gray-300 shadow-md py-3 my-4 z-10">
                <Link to="/add" class="mx-8 hover:underline underline-offset-4">Add Blog</Link>
                <Link to="/manage" class="mx-8 hover:underline underline-offset-4">Manage Blogs</Link>
        </nav>
    );
}

export default SubNav;