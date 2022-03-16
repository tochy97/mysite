import React from 'react';
import me from '../../components/pics/me.png'

function About(props) {
    return (
        <div class="text-center w-full text-xl">
            <p class="text-5xl font-semibold">Welcome to tochyegeonu.com</p>
            <div class="grid grid-col-1 justify-items-center my-5">
                <div class="col-start-1 col-span-1 flex flex-col">
                <img src={me} class="w-96"/>
                </div>
            </div>
            <div>
            <div class="grid grid-col-1 justify-items-center my-5">
                <div class="col-start-1 col-span-1 flex flex-col">
                        <p class="w-96">My name is Tochy Egeonu and I am a practicing software developer. I dont really have a focus at the moment, I just learn what I can. Feel free to contact me.</p>
                    </div>
                </div>
            </div>
            <p class="my-5">tochy@tochyegeonu.com</p>
            <p>(469) 658 - 6413</p>
        </div>
    );
}

export default About;