import React from 'react';
import Kat from '../assets/kat.png'
const Home = () => {
    return (
        <div className='bg-blue h-auto w-screen bg-background px-12 py-20'>
            <div className='mx-auto mt-6 grid items-center gap-8 text-xl md:grid-cols-2'>
                <div className='grid content-center justify-items-center gap-8'>
                    <div>
                        <h1 className='text-3xl font-semibold'>
                            About Me
                        </h1>
                    </div>
                    <p className=''>
                        I am Kat, the owner and artist behind Kat Glam, formerly known as Kat Brows.
                        I have over 5 years of experience in permanent makeup,
                        offering services such as ombre, nano, brows, lip blush,
                        and eyeliner.
                        <br />
                        <br />
                        I also conduct training courses to educate both existing and aspiring artist.
                        <br />
                        <br />
                        My style focuses on complement your natural beauty with a subtle, soft glam look.
                        <br />
                        <br />
                        Let me help you feel and look more beautiful and confident in your own skin!
                    </p>
                    <div className='grid justify-items-center gap-4 font-bold'>
                        <p>
                            Orange County / Los Angeles
                        </p>
                        <div>
                            <button className='h-12 w-40 rounded-full bg-black'>
                                <div className='text-lg text-white'>Book Now</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='max-w-[90%] overflow-hidden rounded-full bg-hero'>
                    <img src={Kat} className='object-contain object-center' />
                </div>
            </div>
        </div>
    );
};

export default Home;
