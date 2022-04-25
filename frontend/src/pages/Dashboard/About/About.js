import React from 'react';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';
import me from '../../../components/pics/me.png'

function About(props) {
    return (
        <div class="relative mt-10">
            <p class="text-5xl font-bold mb-3 text-center">Welcome to tochyegeonu.com</p>
            <hr class="border-black w-100" />
            <div class="text-center w-full text-xl grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div class="col-start-1 grid grid-col-1 lg:my-24 my-5 lg:justify-end justify-center mx-10">
                    <div class="col-start-1 col-span-1 flex flex-col">
                        <img src={me} class="w-96" />
                    </div>
                </div>

                <div class="lg:mt-16 lg:justify-start justify-center">
                    <div class="flex flex-col w-96 m my-5 w-fit">
                        <p class="mt-3 xl:mt-7">My name is Tochy Egeonu and I am a practicing software developer. I do not really have a focus at the moment, I just learn what I can. Feel free to <Link to="../contact" class='mt-3 hover:underline font-bold'>contact</Link> me. <a href='https://drive.google.com/file/d/1S4w82XwdNZATUdfBj3Lzz5W0ZnX1a0Px/view?usp=sharing' class='mt-3 hover:underline font-bold' target="_blank" rel="noreferrer">My resume</a>. <Link to="../projects" class='mt-3 hover:underline font-bold'>My projects</Link>.</p>

                        <Collapsible open={true} trigger={<p class="mt-3 font-bold text-3xl hover:underline ">My contact info</p>}>
                            <p class="mt-3">tochyegeonu97@gmail.com</p>
                            <p class="mt-3">(469) - 658 - 6413</p>
                        </Collapsible>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;