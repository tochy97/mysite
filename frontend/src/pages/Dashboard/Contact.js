import React from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const histroy = useNavigate();

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_cvgm7yn', 'template_7ch9x6h', e.target, 'user_ATwFMLm6kiK025OiQPW75')
      .then((result) => {
        histroy("../success", {replace:true}); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
        <p class="text-5xl text-center mb-5">Send an email</p>
        <form class="grid gap-4 grid-cols-6" onSubmit={sendEmail}>
            <input type="text" name="contact_number" class="hidden border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4"/>
            <input type="text" name="from_name" placeholder='First and last name' class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4"/>
            <input type="email" name="from_email" placeholder='Email' class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4"/>
            <input type="text" name="subject" placeholder='Subject' class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4"/>
            <textarea name="html_message"  placeholder='Message' class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4"/>
            <input  class="border border-gray-300 rounded py-3 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 hover:border-2 hover:underline underline-offset-8 cursor-pointer"  type="submit" value="Send" />
        </form>
    </>
  );
}