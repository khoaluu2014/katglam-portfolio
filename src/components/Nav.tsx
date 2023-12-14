import React, {useState} from 'react'
import Logo from '../assets/logo.svg'
import Instagram from '../assets/instagram.svg'
const Nav = () => {
    return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-6'>
        <div> Contact</div>
        <div className='object-contain w-60 pt-8'> <img src={Logo} alt='Logo Image'/> </div>
        <div className='w-5'> <img src={Instagram} alt='Instagram'/> </div>
    </div>

    );
};

export default Nav;

