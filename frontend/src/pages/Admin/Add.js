import React, { useState, useMemo } from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

function Add(props) {  
    const [convertedText, setConvertedText] = useState("");
    
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
        console.log(convertedText)
        e.preventDefault()
    }
    return (
        <>
        <p class="text-4xl underline p-5 text-center">Add Blog Post</p>
        <form onSubmit={handleSubmit} class="grid grid-col-1">
            <input class="border border-gray-300 rounded py-3 px-4 mb-3" type="text" id="title" name="title"  placeholder="Title"/>
            <textarea class="border border-gray-300 rounded py-3 px-4 mb-3" type="text" id="description" name="description" placeholder="Description"/>
            <div class="z-0 h-48">
                <ReactQuill
                    theme='snow'
                    modules={modules}
                    placeholder="Enter content here"
                    value={convertedText}
                    onChange={setConvertedText}
                    style={{height: '100%'}}
                />
            </div>
            <button type='submit' class="mt-20">Submit</button>
        </form>
        </>
    );
}

export default Add;