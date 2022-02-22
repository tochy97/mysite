import React from 'react';
import useCollapse from 'react-collapsed';
import { MdKeyboardArrowDown } from "react-icons/md";

function Footer() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <footer id="footer" class="fixed bottom-0 left-0 right-0 w-full bg-white border-solid border-t-2 border-gray-300 grid grid-col-1 z-20 transition ease-in-out delay-150">
                <div class="justify-self-center" {...getToggleProps()}>
                    {isExpanded ? <MdKeyboardArrowDown size="3em"/>: <div class="p-3">Click to Search</div>}
                </div>
                <div {...getCollapseProps()}>
                    <div class="col-start-6 lg:flex my-5 lg:items-center lg:justify-center ">
                        <p class="text-2xl mx-5">Search for a blog (by description, title, keywords in content): </p>
                        <div class="mx-5 flex border-2 border-gray-200 hover:border-gray-300 rounded">
                            <input type="text" class="px-4 py-2 w-64" placeholder="Search..."/>
                            <button class="px-4 border-l hover:border-gray-300 hover:underline underline-offset-4 bg-white">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;