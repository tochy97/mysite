import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../Error/Loading';
import Blog from '../Dashboard/Blog';
import { IoTrashBin } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import { removePost } from '../../redux/actionCreators/postActionCreators';
import NoPostsFound from '../Error/NoPostsFound';

function Manage() {
    const [myPost, setMyPost] = useState([]);

    const dispatch = useDispatch();    

    const { posts, user } = useSelector(
      (state) =>({
        posts:state.posts.posts, 
        user:state.auth.user, 
    }), shallowEqual);

    useEffect(() => {
        if(user && posts){
            if(!user.admin){
                setMyPost(posts.filter( ({ owner }) => owner === user.id))
            }
        }
    }, [user, posts]);

    const deletePost = (id) => {
        dispatch(removePost(id))
    }

    return (
        <div id="manage" class="grid grid-cols-4 gap-14 z-0">
            {
                posts && user && user.admin
                ?
                    posts.map((pst, index) => (
                            <div id="preview" class="max-h-96 min-h-96 overflow-hidden border-solid border-4 border-gray-300 rounded bg-gray-300 flex flex-col text-black">
                                <div class="w-full bg-white grid grid-col-2">
                                    <IoTrashBin class="cursor-pointer col-span-1 col-start-1 hover:text-red-500 bg-white justify-self-start" size="3em" onClick={() => deletePost(pst.id)}/>
                                    <Link class="col-span-1 col-start-2 justify-self-end" to={`../edit/${pst.id}`}><RiEdit2Fill class="col-span-1 col-start-2 hover:text-blue-500 bg-white" size="3em"/></Link>
                                </div>
                                <Blog post={pst}/>
                            </div>
                    ))
                :
                myPost && myPost.length > 0
                ?
                    myPost.map((pst, index) => (
                            <div id="preview" class="max-h-96 min-h-96 overflow-hidden border-solid border-4 border-gray-300 rounded bg-gray-300 flex flex-col text-black">
                                <div class="w-full bg-white grid grid-col-2">
                                    <IoTrashBin class="cursor-pointer col-span-1 col-start-1 hover:text-red-500 bg-white justify-self-start" size="3em" onClick={() => deletePost(pst.id)}/>
                                    <Link class="col-span-1 col-start-2 justify-self-end" to={`../edit/${pst.id}`}><RiEdit2Fill class="col-span-1 col-start-2 hover:text-blue-500 bg-white" size="3em"/></Link>
                                </div>
                                <Blog post={pst}/>
                            </div>
                    ))
                :
                (!user.admin && myPost.length === 0) || (!posts)
                ?
                    <div class="col-span-4">
                        <NoPostsFound/>
                    </div>
                :
                
                    <Loading/>
            }
        </div>
    );
}

export default Manage;