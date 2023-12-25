import React from 'react'

const Button = () => {
    return (
        <div className='flex'>
            <a className='rounded-full border-2 border-two px-16 py-4 text-black transition delay-100 duration-300 ease-in-out hover:bg-two hover:font-bold lg:mt-0'
                href='https://squareup.com/appointments/book/kwig883o4fccu3/L7948E9ZSVEKB/services'
                target='_blank' rel='noreferrer'>
                <div className='text-2xl'>
                    Book Now
                </div>
            </a>
        </div>
    );
}

export default Button;
