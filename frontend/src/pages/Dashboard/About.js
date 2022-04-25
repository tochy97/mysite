import React from 'react';
import me from '../../components/pics/me.png'

function About(props) {
    return (
        <div class="text-center w-full text-xl grid lg:grid-col-2 grid-col-1">
            <div class="col-start-1 col-span-1 grid grid-col-1 justify-items-center my-5">
                <div class="col-start-1 col-span-1 flex flex-col">
                    <img src={me} class="w-96"/>
                </div>
            </div>
            <div class="lg:col-start-2 col-span-1 grid grid-col-1 justify-items-center my-5">
                <div class="col-span-1 flex flex-col w-96">
                    <p class="text-5xl font-semibold mb-3">Welcome to tochyegeonu.com</p>
                    <p class="">My name is Tochy Egeonu and I am a practicing software developer. I dont really have a focus at the moment, I just learn what I can. Feel free to contact me.</p>
                    <a href='https://drive.google.com/file/d/13FJy2UWqeODERnF-f547KquspH-em7Nk/view?usp=sharing' class='mt-3 hover:underline font-semibold' target="_blank" rel="noreferrer">My resume</a>
                    <p class="my-5">tochy@tochyegeonu.com</p>
                    <p>(469) 658 - 6413</p>
                </div>
            </div>
        </div>
    );
}

export default About;