import React from 'react'
import { testimonials } from '../data/testimonials';
import Ivyn from '../assets/ivyn.jpg'

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <div className='grid h-auto w-full content-center justify-items-center gap-8 font-roboto lg:h-screen'>
                <div className='mt-12'>
                    <h1 className=' text-6xl font-bold'>
                        Testimonials
                    </h1>
                </div>
                <hr className='my-4 mb-24 h-1 w-52 bg-black'/>
                <div className='flex flex-col justify-evenly gap-20 px-14 text-xl lg:flex-row'>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name} className='rounded-lg bg-zinc-50 p-4 shadow-lg'>
                            <div className='font-light'>
                                <img src={testimonial.image} alt='img' className='mb-4 mr-4 inline rounded-full'/>
                                {testimonial.name}
                            </div>
                            <div className='mb-4 leading-relaxed'>
                                "{testimonial.review}"
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );    
};

export default Testimonials;
