import React, { useState } from 'react';

function Blog(props) {
    return (
        <div id="blog" class="grid grid-row rounded">
            <div id="blog-title" class="p-5 border-b-2 border-solid border-gray-400">
                <p class="text-5xl text-center">Setting up React with Redux</p>
            </div>
            <div id="blog-description" class="">
                <p class="pt-3 px-3">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div id="blog-created" class="border-b-2 border-solid border-gray-400">
                <p class="p-3 text-gray-400">Created: 02/19/2022 09:21pm</p>
            </div>
        </div>
    );
}

export default Blog;