import React from 'react';

function Projects(props) {
    return (
        <div class="mt-10 text-center justify-items-center">
            <p class="text-5xl font-bold xl:mb-8">My projects</p>
            <hr class="border-black w-100 mt-3" />
            <div class="col-start-1 grid grid-col-1 my-5 justify-items-center mx-10 text-xl">
                <div class="col-start-1 col-span-1 flex flex-col w-1/2">
                    <div class="mt-3">
                        <a href='https://tochyegeonu.com' class="hover:underline-offset-8 underline font-medium underline-offset-4 w-fit" target="_blank" rel="noreferrer">tochyegeonu.com</a>
                    </div>
                    <p class="mt-1">This site is a place for me to post tutorials on whatever I feel like.
                    </p>
                    <p class="mt-1">Tech Stack: React, React tailwind, Google Firebase
                    </p>

                    <div class="mt-3">
                        <a href='https://tochyegeonu.online' class="hover:underline-offset-8 underline font-medium underline-offset-4 w-fit" target="_blank" rel="noreferrer">tochyegeonu.online</a>
                    </div>
                    <p class="mt-1">This is the backend for this website.
                    </p>
                    <p class="mt-1">Tech Stack: Django, AWS - EC2, RDS
                    </p>

                    <div class="mt-3">
                        <a href='https://blogutacse.web.app/' class="hover:underline-offset-8 underline font-medium underline-offset-4 w-fit" target="_blank" rel="noreferrer">Blog App</a>
                    </div>
                    <p class="mt-1">This was the very 1st site I built. It is a blog site that allows users to post pictures, videos and texts. Users are allowed to leave comments on post and view any one elses posts.
                    </p>
                    <p class="mt-1">Tech Stack: React, React Bootstrap, Google Firebase
                    </p>

                    <div class="mt-3">
                        <a href='https://shotsbyabs.com/' class="font-medium hover:underline-offset-8 underline underline-offset-4 w-fit" target="_blank" rel="noreferrer">Shotsbyabs</a>
                    </div>
                    <p class="mt-1">This was my 1st client site built for a local photographer. She uses this site to advertise her current work. I built in ways for her to manage the pictures and packages being displayed on the home screen. Proud to say this took only 1 day to build out.
                    </p>
                    <p class="mt-1">Tech Stack: React, React Bootstrap, Google Firebase
                    </p>

                    <div class="mt-3">
                        <a href='https://github.com/tochy97/vaultfilestore' class="font-medium hover:underline-offset-8 underline underline-offset-4 w-fit" target="_blank" rel="noreferrer">Vault file store</a>
                    </div>
                    <p class="mt-1">This is a file encryption application that allows authenticated users to store any file as an encryption online. The user is also allowed to download the file or a hash of the file.
                    </p>
                    <p class="mt-1">Tech Stack: Python, Python Tkinter, Python Cryptography, Python Hashlib
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;