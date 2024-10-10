import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_mlb1fkm', 'template_ihnb2g4', form.current, 'H9lohKHpJ7vKTxAO3')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div name="contact" className='bg-gray-100 py-10'>
            <h1 className='text-4xl flex justify-center font-bold underline mb-10'>Contact Me</h1>
            <form ref={ form } onSubmit={ sendEmail } className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-4">
                    <label className="block mb-2">Name</label>
                    <input type="text" name="from_name" className="w-full px-3 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input type="email" name="from_email" className="w-full px-3 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md"></textarea>
                </div>
                <button type="submit" className="w-full bg-cyan-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Send</button>
            </form>
        </div>
    );
}
