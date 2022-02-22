import React, { useState, useMemo } from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { newPost } from '../../redux/actionCreators/postActionCreators';

function Add(props) {  
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    const { user } = useSelector(
      (state) =>({
        user:state.auth.user, 
    }), shallowEqual);
    
    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],  
                [{ 'color': [] }]  
                ['bold', 'italic', 'underline'],  
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],  
                [{ 'align': [] }],  
                ["blockquote", "code-block"],
            ],
        },
    }));

    const handleSubmit = (e) => {
        const data = {
            owner: user.id,
            title: title,
            description: description,
            content: content
        }
        dispatch(newPost(data))
        e.preventDefault()
    }
    return (
        <>
        <p class="text-4xl underline p-5 text-center">Add Blog Post</p>
        <form onSubmit={handleSubmit} class="grid grid-col-1">
            <input class="border border-gray-300 rounded py-3 px-4 mb-3" type="text" id="title" name="title"  placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
            <textarea class="border border-gray-300 rounded py-3 px-4 mb-3" type="text" id="description" name="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>
            <div class="z-0 h-48">
                <ReactQuill
                    theme='snow'
                    modules={modules}
                    placeholder="Enter content here"
                    value={content}
                    onChange={setContent}
                    style={{height: '100%'}}
                />
            </div>
            <button type='submit' class="mt-20 border border-gray-300 rounded p-5 py-5 hover:underline underline-offset-8 w-24 justify-self-center">Submit</button>
        </form>
        </>
    );
}

export default Add;