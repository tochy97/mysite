import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

function SubNav() {

    const { isLoggedIn } = useSelector(
        (state) => ({
            isLoggedIn: state.auth.isLoggedIn,
        }), shallowEqual);
    return (
        <div id="nav" class="mb-3 opacity-80 left-0 right-0 w-full bg-white-400 text-black border-solid border-b-2 border-gray-300 shadow-md z-10">
            <Collapsible
                trigger={
                    <div className='w-full flex justify-center hover:text-neutral-500'>
                        <MdArrowDropDown size={30} />
                    </div>
                }
                triggerWhenOpen={
                    <div className='w-full flex justify-center hover:text-neutral-500'>
                        <MdArrowDropUp size={30} />
                    </div>
                }
            >
                <div class='my-3'>
                    <Link to="/tutorials" class="mx-8 hover:underline underline-offset-4">View Tutorials</Link>
                    <Link to="/contact" class="mx-8 hover:underline whitespace-nowrap ">Contact Me</Link>
                    {
                        isLoggedIn
                        &&
                        <>
                            <Link to="/add" class="mx-8 hover:underline underline-offset-4">Add Blog</Link>
                            <Link to="/manage" class="mx-8 hover:underline underline-offset-4">Manage Blogs</Link>
                        </>
                    }
                </div>
            </Collapsible>
        </div>
    );
}

export default SubNav;