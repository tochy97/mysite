import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../Error/Loading';
import Blog from '../Dashboard/Blog';
import { IoTrashBin } from "react-icons/io5";
import { removePost } from '../../redux/actionCreators/postActionCreators';

function Manage() {
    const dispatch = useDispatch();    

    const { posts, user } = useSelector(
      (state) =>({
        posts:state.posts.posts, 
        user:state.auth.user, 
    }), shallowEqual);

    const deletePost = (id) => {
        dispatch(removePost(id))
    }

    return (
        <div id="dashboard" class="grid grid-cols-4 gap-14 z-0">
            {
                posts && user && user.admin
                ?
                    posts.map((pst, index) => (
                            <div id="preview" class="max-h-96 min-h-96 overflow-hidden border-solid border-4 border-gray-300 rounded hover:shadow-2xl hover:border-gray-400 cursor-pointer transition duration-500 bg-gray-300 hover:bg-gray-400 flex flex-col">
                                <div class="w-full bg-white">
                                <IoTrashBin class="top-10 hover:text-red-500 bg-white" size="3em" onClick={() => deletePost(pst.id)}/>
                                </div>
                                <Blog post={pst}/>
                            </div>
                    ))
                :
                    <Loading/>
            }
        </div>
    );
}

export default Manage;