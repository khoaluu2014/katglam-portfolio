import Logo from '../assets/logo.svg'
import Instagram from '../assets/instagram.svg'
const Nav = () => {
    return (
        <section id='nav'>
            <div className=''>
                <header className='fixed top-0 z-10 flex h-[80px] w-full items-center justify-between px-12'>
                    <div className='pt-8'> 
                        <img src={Logo} className='w-72 object-cover' alt='Logo'/>
                    </div>
                    <a className='w-8' href='https://www.instagram.com/brows.kattt' target='_blank'>
                        <img src={Instagram} alt='Instagram'/>
                    </a>
                </header>
            </div>
        </section>
    );
};

export default Nav;

