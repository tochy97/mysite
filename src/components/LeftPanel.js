import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import useCollapse from 'react-collapsed';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';


function LeftPanel() {
    const { user } = useSelector(
      (state) =>({
        user:state.auth.user, 
    }), shallowEqual);

    const { getCollapseProps, isExpanded, setExpanded } = useCollapse();
    return (
        <>
        {
            user
            ?
                <OutsideClickHandler onOutsideClick={() => { setExpanded(false) }}>
                    <div id="left-panel" class="fixed left-0 flex-none w-auto border-r-2 border-solid border-gray-200 top-20 h-full z-10 bg-gray-400 text-white grid grid-col-2 shadow-xl">
                        <div id="left-panel-content" class="col-start-1 col-span-1 flex flex-col mt-10"  {...getCollapseProps()}>
                            <div id="left-panel-content-1">
                                <Link to="/add" class="text-xl p-5 whitespace-nowrap hover:underline underline-offset-4">Add Blog</Link>
                                <hr class="my-10 mx-5"/>
                            </div>
                            <div id="left-panel-content-2">
                                <Link to="/manage" class="text-xl p-5 whitespace-nowrap hover:underline underline-offset-4">Manage Blogs</Link>
                                <hr class="my-10 mx-5"/>
                            </div>
                        </div>
                        <button  id="left-panel-toggle" class="col-start-2 col-span-1 justify-self-end mb-48" onClick= {() => setExpanded((prevExpanded) => !prevExpanded)}>
                            {isExpanded ? <MdKeyboardArrowLeft size="3em"/>: <MdKeyboardArrowRight size="3em"/>}
                        </button>
                    </div>
                </OutsideClickHandler>
            :
                <></>
        }
        </>
    );
}

export default LeftPanel;