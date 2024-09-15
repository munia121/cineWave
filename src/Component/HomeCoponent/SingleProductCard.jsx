/* eslint-disable react/prop-types */
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const SingleProductCard = ({ product }) => {
    const form = useRef();

    const [message, setMessage] = useState('')

    // eslint-disable-next-line no-unused-vars
    const { image, service_name, description } = product;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_y5yckiq', 'template_r6e7dbf', form.current, {
                publicKey: '_ZWiY2dGa5LLJrRhw',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setMessage('Your mail has been sent successfully')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <div >
                <div className='border'>
                    <img className='lg:w-full md:h-[300px]' src={image} alt="" />
                    {/* <video width="200px" controls src="assets/media/video-clip.mp4"></video> */}

                </div>
                <div className='mt-5 mx-auto'>
                    <h1 className='uppercase text-center text-2xl font-semibold text-white'>{service_name}</h1>
                    <div>
                        <p className='lg:w-[450px] md:w-[200px] mx-auto text-white text-xs'>{description} </p>
                    </div>
                </div>
                <div className='text-center px-4'>
                    {/* <p className='text-xs font-semibold border w-28 py-1 rounded-full border-[#d36724] mx-auto mt-3  text-[#d36724] bg-white'>BOOK NOW</p> */}

                    <button className="text-xs font-semibold border w-28 py-1 rounded-full border-[#d36724] mx-auto mt-3  text-[#d36724] bg-white" onClick={() => document.getElementById('my_modal_3').showModal()}>BOOK NOW</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <form ref={form} onSubmit={sendEmail}>
                                {/* if there is a button in form, it will close the modal */}
                                <div className="lg:flex gap-5">
                                    <div>
                                        <p className="text-white lg:text-left">Enter your name</p>
                                        <input className="px-4 p-1" type="text" name="from_name" id="" placeholder='your name' />
                                    </div>
                                    <div>
                                        <p className="text-white lg:text-left">Enter your email</p>
                                        <input
                                            className="px-4 p-1" type="email" name="from_email" id="" placeholder='your email' />
                                    </div>
                                </div>
                                <div className="lg:flex gap-5 mt-10">
                                    <div>
                                        <p className="text-white lg:text-left"> Enter Phone number</p>
                                        <input className="px-4 p-1" type="number" name="from_phone" id="" placeholder='phone number' />
                                    </div>
                                    <div>
                                        <p className="text-white lg:text-left">Service name</p>
                                        <input className="px-4 py-1" type="text" name="from_service" id="" placeholder={service_name} />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="font-semibold border w-28 py-1 rounded-full border-[#d36724] mx-auto mt-3  text-[#d36724] bg-white">Send Mail</button>
                                    
                                </div>
                                {message && (
                                    <p className="mt-4 text-center text-white">{message}</p> // Display the message
                                )}
                            </form>

                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;