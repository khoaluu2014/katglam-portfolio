import React from 'react'
import { testimonials } from '../data/data';

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <div className='grid h-auto w-full content-center justify-items-center gap-8 font-body lg:h-screen'>
                <div className='my-12 block'>
                    <h1 className='text-6xl font-bold'>
                        Testimonials
                    </h1>
                    <hr className='my-4 h-1 bg-four'/>
                </div>
                <div className='text-md flex flex-col justify-evenly gap-20 px-4 lg:flex-row lg:px-14 lg:text-xl'>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name} className='rounded-lg bg-three p-4 shadow-lg'>
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
