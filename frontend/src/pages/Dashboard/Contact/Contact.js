import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { sendEmail } from '../../../redux/actionCreators/authActionCreators';
import EmailSent from '../../Messages/EmailSent';

export default function Contact() {
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { emailsent } = useSelector(
    (state) => ({
      emailsent: state.auth.email,
    }), shallowEqual);

  const contactMe = (e) => {
    alert("sending")
    e.preventDefault()
    const data = {
      subject: subject,
      message: "From - " + fullname + " - " + email + ". \n" + message
    }
    dispatch(sendEmail(data))
    e.preventDefault()
  }


  return (
    <>
      <p class="text-5xl text-center mb-5">Contact me</p>
      {
        true ?
          <form class="grid gap-4 grid-cols-6" onSubmit={contactMe}>
            <input type="text" name="contact_number" class="hidden border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" />
            <input type="text" name="fullname" value={fullname} onChange={e => setFullname(e.target.value)} placeholder='First and last name' class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" required />
            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" required />
            <input type="text" name="subject" value={subject} onChange={e => setSubject(e.target.value)} placeholder='Subject' class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" required />
            <textarea name="html_message" value={message} onChange={e => setMessage(e.target.value)} placeholder='Message' class="border border-gray-500 rounded py-3 px-4 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4" required />
            <button class="border border-gray-300 rounded py-3 mb-3 lg:col-start-3 lg:col-span-2 col-start-2 col-span-4 hover:border-2 hover:underline underline-offset-8 cursor-pointer" type="submit">Send</button>
          </form>
          :
          <EmailSent />
      }
    </>
  );
}