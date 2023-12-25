import React from 'react'
import {services} from '../data/data'
import {makeups} from '../data/data'
const Services = () => {
    return (
        <section id='services'>
            <div className='grid h-auto w-full content-evenly justify-items-center gap-8 font-body lg:h-screen'>
                <div className='mt-24 block'>
                    <div className='text-4xl font-bold lg:text-5xl'>
                        Specialties 
                    </div> 
                    <hr className='my-4 h-1 bg-black'/>
                </div> 
                <div className='flex flex-col justify-evenly gap-20 px-14 text-xl lg:flex-row'>
                    {
                        services.map((service) =>(
                            <div key={service.image} className='flex w-full flex-col items-center rounded-lg'>
                                <div className='m-4 h-auto'>
                                    <img src={service.image} className='rounded-full object-contain' alt=''/>
                                </div>
                                <div className='mb-4 text-2xl font-semibold'>
                                    {service.name}
                                </div>
                                <div className='whitespace-pre-wrap'>
                                    {service.description}
                                </div>
                            </div>
                        )) 
                    }
                </div>
                <div className='mt-8 block'>
                    <div className='text-4xl font-bold lg:text-5xl'>
                        Makeup By Kat 
                    </div> 
                    <hr className='my-4 h-1 bg-black'/>
                </div> 
                <div className='flex flex-col justify-evenly gap-20 px-14 text-xl lg:flex-row'>
                    {
                        makeups.map((makeup) =>(
                            <div key={makeup.image} className='flex flex-col items-center'>
                                <img src={makeup.image} className='m-8 h-64 w-64 rounded-full object-cover' alt=''/>
                            </div>
                        )) 
                    }
                </div>
            </div>

        </section>
    );
};
export default Services;
