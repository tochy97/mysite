import React from 'react';
import { Link } from 'react-router-dom';

function Blog(props) {
    return (
        <div id="blog" class="mx-14 lg:mx-60 grid grid-row border-solid border-2 border-gray-300 rounded">
            <div class="p-5 border-b-2 border-solid border-gray-400">
                <p class="text-5xl text-center">Setting up React with Redux</p>
            </div>
                <div id="preview-description" class="">
                    <p class="pt-3 px-3">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            <div id="preview-created" class="border-b-2 border-solid border-gray-400">
                <p class="p-3 text-gray-400">Created: 02/19/2022 09:21pm</p>
            </div>
            <div class="">
                <div class="m-3 p-3 border-b-2 border-solid border-gray-300">
                    <p class="text-2xl">
                        Why redux?
                    </p>
                </div>
                <div class="p-5 border-b-2 border-solid border-gray-300">
                    <p>
                        Redux is a state management tool that allows for us to have a centralized location to store and manage all information that you will use in your web application. You can simply use hooks and pass props to maintain state but that will require you to track it all manually. With redux you get a place to see when information is changing and whats changing it. There are other state management tools such as recoil or graphql, but today we will be using redux.
                    </p>
                </div>
                <div class="m-3 p-3 border-b-2 border-solid border-gray-300">
                    <p class="text-2xl">
                        Create react app
                    </p>
                </div>
                <div class="p-5 border-b-2 border-solid border-gray-300">
                    <p>
                        You must have <a target="_blank" href="https://nodejs.org/en/download/" class="hover:underline">NodeJs</a> installed in order to create a react app. Before creating the app we should check out version of npm with
                        <p>npm version</p>
                        You may need to update depending on your version of nvm. Use the command
                        <p>npm install 16</p>
                        or whatever version of nvm you want to install. If you already have a different version install and want to just switch you can use
                        <p>npm use 16</p>
                        Now that the dependencies are good you can now run
                        <p>npx create-react-app myapp</p>
                        This will create a react template with a root directory name of myapp.
                        You can go through and delete all the files within src besides App.js and index.js, then remove their imports from App.js and index.js. Now to test if everything is still good in your project run
                        <p>npm run start</p>
                    </p>
                </div>
                <div class="m-3 p-3 border-b-2 border-solid border-gray-300">
                    <p class="text-2xl">
                        Adding redux
                    </p>
                </div>
                <div class="p-5 border-b-2 border-solid border-gray-300">
                    <p>
                        Redux is a state management tool that allows for us to have a centralized location to store and manage all information that you will use in your web application. You can simply use hooks and pass props to maintain state but that will require you to track it all manually. With redux you get a place to see when information is changing and whats changing it. There are other state management tools such as recoil or graphql, but today we will be using redux.
                    </p>
                </div>
                <div class="m-3 p-3 border-b-2 border-solid border-gray-300">
                    <p class="text-2xl">
                        Finished!!
                    </p>
                </div>
                <div class="p-5 border-b-2 border-solid border-gray-300">
                    <p>
                        Redux is a state management tool that allows for us to have a centralized location to store and manage all information that you will use in your web application. You can simply use hooks and pass props to maintain state but that will require you to track it all manually. With redux you get a place to see when information is changing and whats changing it. There are other state management tools such as recoil or graphql, but today we will be using redux.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Blog;