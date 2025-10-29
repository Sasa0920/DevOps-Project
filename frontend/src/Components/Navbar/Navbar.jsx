import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GiChefToque, GiForkKnifeSpoon } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import {
  FiBook,
  FiStar,
  FiPhone,
  FiShoppingCart,
  FiLogOut,
  FiKey,
} from 'react-icons/fi';
import Login from '../../Components/Login/Login'; 
import Signup from '../../Components/Signup/Signup';


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate()
  const location = useLocation();
  

   const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem('loginData'))
  );
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);


  useEffect(() => {
    setShowLoginModal(location.pathname === '/login');
    setShowSignUpModal(location.pathname === '/signup');
    setIsAuthenticated(Boolean(localStorage.getItem('loginData')));
  }, [location.pathname]);

  const handleLoginSuccess = () => {
  localStorage.setItem('loginData', JSON.stringify({ loggedIn: true }));
  setIsAuthenticated(true);
  navigate('/');
 };
 const handleLogout = () => {
  localStorage.removeItem('loginData');
  setIsAuthenticated(false);
  navigate('/'); 
};


const renderDesktopAuthButton = () => {
  return isAuthenticated ? (
    <NavLink
      to="/"
      onClick={handleLogout}
      className="group px-3 md:px-3 lg:px-4 py-2 md:py-2 lg:py-3 text-sm md:text-[15px] lg:text-base relative transition-all duration-300 flex items-center hover:bg-amber-900/20 rounded-3xl border-2 border-amber-900/30 hover:border-amber-600/50 shadow-md shadow-amber-900/20"
    >
      <FiLogOut className="mr-2 text-sm md:text-[15px] lg:text-base text-amber-500 group-hover:text-amber-300 transition-all" />
      <span className="text-amber-100 group-hover:text-amber-300 relative">
        Logout
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400 transition-all group-hover:w-full"></span>
      </span>
    </NavLink>
  ) : (
    <NavLink
      to="/login"
      className="group px-3 md:px-3 lg:px-4 py-2 md:py-2 lg:py-3 text-sm md:text-[15px] lg:text-base relative transition-all duration-300 flex items-center hover:bg-amber-900/20 rounded-3xl border-2 border-amber-900/30 hover:border-amber-600/50 shadow-md shadow-amber-900/20"
    >
      <FiKey className="mr-2 text-sm md:text-[15px] lg:text-base text-amber-500 group-hover:text-amber-300 transition-all" />
      <span className="text-amber-100 group-hover:text-amber-300 relative">
        Login
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400 transition-all group-hover:w-full"></span>
      </span>
    </NavLink>
  );
};
  
  const navLinks = [
    { name: 'Home', to: '/', icon: <FiHome /> },
    { name: 'Menu', to: '/menu', icon: <FiBook /> },
    { name: 'About', to: '/about', icon: <FiStar /> },
    
  ];

  return (
    <nav className='bg-[#2D1B0E] border-b-8 border-amber-900/30 shadow-[0_25px_50px_-12px] font-vibes group/nav overflow-x-hidden sticky top-0 z-50'>
      <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4'>
        <div className='h-[6px] bg-gradient-to-r from-transparent via-amber-600/50 to-transparent shadow-[0_0_20px] shadow-amber-500/30' />
        <div className='flex justify-between px-6'>
          <GiForkKnifeSpoon className='text-amber-500/40 -ml-2 rotate-45' size={32} />
          <GiForkKnifeSpoon className='text-amber-500/40 -mr-2 -rotate-45' size={32} />
        </div>
      </div>

      {/* MAIN NAVIGATION CONTAINER */}
      <div className='max-w-7xl mx-auto px-4 relative'>
        <div className='flex justify-between items-center h-16 md:h-20 lg:h-24'>
          {/* LOGO */}
          <div className='flex shrink-0 items-center space-x-2 group relative md:-translate-x-4 lg:-translate-x-6 ml-0 md:ml-2'>
            <div className='absolute -inset-4 bg-amber-500/10 rounded-full blur-xl opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300' />
              <GiChefToque className='text-3xl md:text-4xl lg:text-5xl text-amber-500 transition-all group-hover:rotate-12 group-hover:text-amber-400 hover:drop-shadow-[0_0_15px] hover:drop-shadow-500/50' />
                <div className='flex flex-col relative ml-2 max-w-[140px] md:max-w-[160px] lg:max-w-none'>
                <NavLink to='/' className='text-2xl md:text-xl lg:text-4xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-monsieur tracking-wider drop-shadow-[0_2px_2px] drop-shadow-black -translate-x-2 truncate md:truncate-none'>
                  EatZone
               </NavLink>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
              <div className="hidden md:flex items-center space-x-2 md:space-x-1 lg:space-x-4 flex-1 justify-end">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    className={({ isActive }) =>
                      `group px-3 md:px-3 lg:px-4 py-2 md:py-2 lg:py-3 text-sm md:text-[15px] lg:text-base relative transition-all duration-300 flex items-center hover:bg-amber-900/20 rounded-3xl border-2 ${
                        isActive
                          ? 'border-amber-600/50 bg-amber-900/20 shadow-[inset_0_0_15px] shadow-amber-500/20'
                          : 'border-amber-900/30 hover:border-amber-600/50'
                      } shadow-md shadow-amber-900/20`
                    }
                  >
                    <span className="mr-2 text-sm md:text-[15px] lg:text-base text-amber-500 group-hover:text-amber-300 transition-all">
                      {link.icon}
                    </span>
                    <span className="text-amber-100 group-hover:text-amber-300 relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400 transition-all group-hover:w-full"></span>
                    </span>
                  </NavLink>
                  
                ))}
                <div className='flex items-center space-x-2 md:space-x-3 lg:space-x-4 ml-3 md:ml-3 lg:ml-6 mr-2 md:mr-3 lg:mr-4'>
                  <NavLink
                    to='/cart'
                    className='p-2 md:p-2.5 lg:p-3 text-amber-100 rounded-xl transition-all relative border-2 border-amber-900/30 hover:border-amber-600/50 group hover:bg-amber-900/20 hover:shadow-lg hover:shadow-amber-500/30 shadow-md shadow-amber-900/20'
  >
                  <FiShoppingCart className='text-base md:text-lg lg:text-xl' />
                  </NavLink>
                  {renderDesktopAuthButton()}
                  
                </div>

              </div>

          

        </div>
      </div>
      {/* LOGIN MODAL */}
      {showLoginModal && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4'>
          
            <button
              onClick={() => navigate('/')}
              className='absolute top-2 right-2 text-amber-500 text-2xl hover:text-amber-300'
            >
              &times;
            </button>

            <Login onLoginSuccess={handleLoginSuccess} onClose={() => navigate('/')} />
          </div>
       
      )}
      {/* SIGNUP MODAL */}
      {showSignUpModal && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4'>
          <button
            onClick={() => navigate('/')}
            className='absolute top-2 right-2 text-amber-500 text-2xl hover:text-amber-300'
          >
            &times;
          </button>

          <Signup />
        </div>
      )}



    </nav>
  );
};

export default Navbar;
