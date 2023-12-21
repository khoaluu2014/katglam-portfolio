import Logo from '../assets/logo.svg'
import Instagram from '../assets/instagram.svg'
const Nav = () => {
    return (
        <div>
            <header className='fixed top-0 flex h-[80px] w-full items-center justify-between px-6'>
                <div> Contact</div>
                <div className='w-60 object-contain pt-8'> 
                    <img src={Logo} alt='Logo'/>
                </div>
                <div className='w-6'>
                    <img src={Instagram} alt='Instagram'/>
                </div>
            </header>
        </div>
    );
};

export default Nav;

