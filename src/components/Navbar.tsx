import { BsCart, BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useEffect, useState } from 'react';

const themes = {
    winter: 'winter',
    dracula: 'dracula'
};
const getThemeFromLocalStorage = () => {
    return localStorage.getItem('theme') || themes.winter;
};

function Navbar() {
    const [theme, setTheme] = useState(getThemeFromLocalStorage);
    const handleTheme = (): void => {
        const { winter, dracula } = themes;
        const newTheme = theme === winter ? dracula : winter;
        setTheme(newTheme);
    };
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <nav className='bg-base-200'>
            <div className='navbar align-element'>
                <div className='navbar-start'>
                    {/* TiTLE */}
                    <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center'>
                        C
                    </NavLink>
                    {/* DROPDOWN */}
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost lg:hidden '>
                            <FaBarsStaggered className='size-6' />
                        </label>
                        <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'>
                            <NavLinks />
                        </ul>
                    </div>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal'>
                        <NavLinks />
                    </ul>
                </div>
                <div className='navbar-end'>
                    {/* THEME SETUP */}
                    <label className='swap swap-rotate'>
                        <input type='checkbox' onChange={handleTheme} />
                        {/* sun icon */}
                        <BsSunFill className='swap-on size-4' />
                        {/* moon icon */}
                        <BsMoonFill className='swap-off size-4' />
                    </label>
                    {/* CART LINK */}
                    <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
                        <div className='indicator'>
                            <BsCart3 className='size-6' />
                            <span className='badge badge-sm size-5 md:size-6 badge-primary indicator-item '>8</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
