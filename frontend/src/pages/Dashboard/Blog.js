import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'
import { shallowEqual, useSelector } from 'react-redux';
import Loading from '../Error/Loading';

function Blog(props) {
    const [myPost,setMyPost] = useState([]);

    const postId = window.location.pathname.split("/")[2];

    const { posts } = useSelector(
      (state) =>({
        posts:state.posts.posts, 
    }), shallowEqual);
    
    useEffect(() => {
        if(posts && postId){
            setMyPost(posts.find( ({ id }) => id === parseInt(postId) ))
        }
    }, [posts,postId,setMyPost,myPost]);

    return (
        <>
        {
            props.post
            ?
                <div id="blog" class="grid grid-row">
                    <div id="blog-title" class="p-5 border-b-2 border-solid border-gray-400">
                        <p class="text-5xl text-center">{props.post.title}</p>
                    </div>
                    <div id="blog-created">
                        <p class="px-3 pt-3 text-gray-400">Created: 02/19/2022 09:21pm</p>
                    </div>
                    <div id="blog-description"  class="border-b-2 border-solid border-gray-400">
                        <p class="pt-1 pb-3 px-3">Description: {props.post.description}</p>
                    </div>
                    <div id="blog-content" class="border-b-2 border-solid border-gray-400">
                        {
                            !window.location.pathname.includes("manage") && !window.location.pathname.includes("home")
                            &&
                            <ReactQuill value={props.post.content || ''} readOnly={true} theme={"bubble"}/>
                        }
                    </div>
                </div>
            :
            myPost
            ?
                <div id="blog" class="grid grid-row rounded">
                    <div id="blog-title" class="p-5 border-b-2 border-solid border-gray-400">
                        <p class="text-5xl text-center">{myPost.title}</p>
                    </div>
                    <div id="blog-created">
                        <p class="px-3 pt-3 text-gray-400">Created: 02/19/2022 09:21pm</p>
                    </div>
                    <div id="blog-description"  class="border-b-2 border-solid border-gray-400">
                        <p class="pt-1 pb-3 px-3">Description: {myPost.description}</p>
                    </div>
                    <div id="blog-content" class="border-b-2 border-solid border-gray-400">
                        {
                            !window.location.pathname.includes("manage") && !window.location.pathname.includes("home")
                            &&
                            <ReactQuill 
                                value={myPost.content || ''} 
                                readOnly={true} 
                                theme={"bubble"}
                            />
                        }
                    </div>
                </div>
            :
                <Loading/>

        }
        </>
    );
}

export default Blog;