import React from 'react';
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer id="footer" class="fixed bottom-0 left-0 right-0 w-full bg-black text-white border-solid border-t-2 border-gray-300 grid grid-cols-3 gap-1 z-20 transition ease-in-out delay-150 justify-items-center">
            <div class="col-start-1 col-span-1 w-full grid grid-col-1 justify-items-center  my-1">
                <div class="w-full">
                    <p class="font-bold my-2 text-center">My links</p>
                    <hr class="lg:mx-24 my-2"/>
                </div>
                <div class="col-start-1 col-span-1 w-9 flex flex-col">
                    <a href='https://github.com/tochy97' target="_blank" rel="noreferrer"><BsGithub class="text-3xl my-1 hover:text-blue-500"/></a>
                    <a href='https://www.linkedin.com/in/tochukwu-egeonu-79935a127/' target="_blank" rel="noreferrer"><ImLinkedin class="text-3xl hover:text-blue-500"/></a>
                </div>
            </div>
            <div class="col-start-2 col-span-1 w-full my-1">
                <div class="flex flex-col justify-items-center">
                    <div class="w-full">
                        <p class="font-bold my-2 text-center">Other Projects</p>
                        <hr class="lg:mx-24 my-2"/>
                    </div>
                    <div class="lg:mx-28 flex flex-col">
                        <a href='https://blogutacse.web.app/' class="hover:underline text-center" target="_blank" rel="noreferrer">My site: Verion 1</a>
                        <a href='https://shotsbyabs.com/' class="hover:underline text-center" target="_blank" rel="noreferrer">Shotsbyabs</a>
                    </div>
                </div>
            </div>
            <div class="col-start-3 col-span-1 w-full my-1">
                <div class="flex flex-col justify-items-center">
                    <div class="w-full">
                        <p class="font-bold my-2 text-center">Quick Access</p>
                        <hr class="lg:mx-24 my-2"/>
                    </div>
                    <div class="lg:mx-28 flex flex-col">
                        <Link to="../../contact" class="hover:underline whitespace-nowrap text-center">Contact Me</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;