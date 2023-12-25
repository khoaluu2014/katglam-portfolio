import React from 'react'

const About = () => {
    return(
        <section id='About'>
            <div className='grid h-auto w-full content-center justify-items-center px-8 text-left font-body lg:h-screen'>
                <div className='mb-12 lg:w-3/4'>
                    <p className='mb-12 font-bold text-five'>
                        About Me
                    </p>
                    <p className='mb-24 text-3xl font-bold lg:text-5xl'>
                        I am a makeup artist based in Orange County with a passion for editorial, bridal, and beauty shoots,
                        with over 5 years in the industry.
                    </p>
                    <div className='text-xl'>
                        I specialize in permanent makeup, ombre, nano brows,
                        lip blush, eyeliner. I also conduct training courses to educate both existing and aspiring artist.
                        My focus is on enhancing your natural beauty, and my style leans towards a subtle, soft glam look.
                        I look forward to helping you feel and look more beautiful and confident in your own skin.
                    </div>
                </div>
            </div>
        </section> 
    );
};

export default About;
