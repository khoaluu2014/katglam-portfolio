import React from 'react'
import Button from './Button'
const Footer = () => {
    return (
        <div className='my-8 flex flex-col items-center gap-8 font-body lg:mb-8'>
            <div className='text-xl font-semibold'>
                Based In Orange County
            </div>
            <div className='flex justify-center'>
                <Button/>
            </div>
        </div>

    );
};

export default Footer;
