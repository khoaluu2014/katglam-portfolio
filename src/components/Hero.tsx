import React from 'react';
import Kat from '../assets/kat.png'
import Phone from '../assets/phone.svg'
import Mail from '../assets/mail.svg'
const Home = () => {
    return (
        <section id='home'> 
            <div className='h-auto w-full py-48 font-body lg:h-screen'>
                <div className='mx-auto grid place-items-center gap-8 text-left text-xl lg:mx-32 lg:grid-cols-2'>
                    <div className='grid gap-8'>
                        <div>
                            <div className='mb-14 inline-block'>
                                <div className='mb-2 text-sm font-light uppercase text-gray-950'>
                                    Hello, my name is 
                                </div>
                                <hr className='w-20 border-t-2 border-gray-500'/>
                            </div>
                            <div className='mb-14'>
                                <div className='text-7xl font-extrabold'>
                                    Kat 
                                </div>  
                                <div className='text-2xl font-extrabold text-five'>
                                    Owner & Makeup Artist of Kat Glam
                                </div>
                            </div>
                            <img src={Phone} className='my-6 mr-2 inline h-6 w-6'/> 
                            <div className='inline text-sm uppercase'>
                                657-319-8091
                            </div>
                            <br/>
                            <img src={Mail} className='mr-2 inline h-6 w-6'/> 
                            <div className='inline text-sm uppercase'>
                                katbrowsbeauty@gmail.com
                            </div>
                        </div>
                        <div className='mt-8 grid justify-items-center gap-4 font-bold'>
                            <p>
                                Orange County / Los Angeles
                            </p>
                            <div className='mt-4'>
                                <a className='rounded-full bg-black px-12 py-4 text-white'
                                    href='https://squareup.com/appointments/book/kwig883o4fccu3/L7948E9ZSVEKB/services'
                                    target='_blank'>
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='order-first w-[80%] overflow-hidden rounded-full bg-three shadow-xl lg:order-last lg:ml-24'>
                        <img src={Kat} className='min-w-[80%] object-contain object-center' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
