import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo/CWA-LOGO-2-png.png'

const Navbar = () => {

  const navLinks = <>
    <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600  underline underline-offset-8 ' : '  '} to={'/'}>Home</NavLink></li>

    <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600 underline underline-offset-8 ' : '  '} to={'service'}>Service</NavLink></li>

    <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600 underline underline-offset-8 ' : '  '} to={'pricing'}>Pricing</NavLink></li>

    <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600 underline underline-offset-8 ' : '  '} to={'about'}>About</NavLink></li>

    

  </>

  return (
    <div className=" fixed lg:w-[1400px] flex md:ml-64 justify-between text-center mx-auto">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap=""
                  strokeLinejoin=""
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content text-white uppercase  z-[10] mt-3 w-52 p-2 ">
              {navLinks}
            </ul>
          </div>

          <div className="flex gap-6 items-center">
            <img className="w-64" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center z-10 hidden lg:flex">
          <ul className="menu text-xl uppercase text-white menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <p className="uppercase border text-[#d36724] px-2 rounded-lg border-[#d36724]">request a quote</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;