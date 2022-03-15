import React from 'react';
import me from "../../components/me.png"

function About(props) {
    return (
        <div class="text-center text-xl place-content-center flex flex-col">
            <p class="text-5xl mb-3">Welcome!!</p>
            <hr class="mb-3" />
            <p>Thank you for taking the time to visit my site. My name is Tochukwu Egeonu, or Toch for short. I am passionate about all aspects of computer science so I decided to create this tutorial site in order to pass on my knowledge. Feel free to contact me and have a wonderful day!</p>

            <div class="w-full grid grid-col-1 justify-items-center  my-1">
                <div class="col-start-1 col-span-1 flex flex-col">           
                    <img class="w-96 justify-center"src={me}/>
                </div>
            </div>
            <p>Phone: (469) - 658 - 6413</p>
            <p>Email: tochy@tochyegeonu.com</p>
        </div>
    );
}

export default About;