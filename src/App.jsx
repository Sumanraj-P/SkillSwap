import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FiHome, FiSearch, FiBook, FiVideo, FiMessageSquare, FiUser, FiMoon, FiSun, FiMonitor } from 'react-icons/fi';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const { theme, setThemePreference } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-navy-900 text-white' : 'bg-white text-gray-900'}`}>
        {/* Header */}
        <header className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
          isScrolled 
            ? theme === 'dark'
              ? 'bg-navy-800/90 shadow-md shadow-blue-900/10 backdrop-blur-md'
              : 'bg-white/90 shadow-md shadow-gray-200/50 backdrop-blur-md'
            : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Skill Swap
                </span>
              </Link>

              {/* Main Navigation */}
              <nav className="hidden md:flex space-x-1">
                <NavLink to="/" icon={<FiHome />} label="Home" active={location.pathname === '/'} />
                <NavLink to="/explore" icon={<FiSearch />} label="Explore" active={location.pathname === '/explore'} />
                <NavLink to="/learning" icon={<FiBook />} label="My Learning" active={location.pathname === '/learning'} />
                <NavLink to="/teaching" icon={<FiVideo />} label="My Teaching" active={location.pathname === '/teaching'} />
                <NavLink to="/messages" icon={<FiMessageSquare />} label="Messages" active={location.pathname === '/messages'} />
              </nav>

              {/* Right Section - Theme Toggle & Profile */}
              <div className="flex items-center space-x-4">
                {/* Theme Toggle */}
                <div className={`hidden sm:flex p-1 rounded-full ${
                  theme === 'dark' ? 'bg-navy-700' : 'bg-gray-100'
                }`}>
                  <button
                    onClick={() => setThemePreference('light')}
                    className={`p-1.5 rounded-full ${theme === 'light' ? 'bg-white text-blue-500 shadow-sm' : 'text-gray-400'}`}
                  >
                    <FiSun size={18} />
                  </button>
                  <button
                    onClick={() => setThemePreference('system')}
                    className={`p-1.5 rounded-full ${theme === 'system' ? 'bg-white text-blue-500 shadow-sm' : 'text-gray-400'}`}
                  >
                    <FiMonitor size={18} />
                  </button>
                  <button
                    onClick={() => setThemePreference('dark')}
                    className={`p-1.5 rounded-full ${theme === 'dark' ? 'bg-navy-600 text-blue-400 shadow-sm' : 'text-gray-400'}`}
                  >
                    <FiMoon size={18} />
                  </button>
                </div>

                {/* User Profile */}
                <button className={`h-10 w-10 rounded-full flex items-center justify-center overflow-hidden ${
                  theme === 'dark' ? 'bg-navy-700 hover:bg-navy-600' : 'bg-gray-100 hover:bg-gray-200'
                }`}>
                  <FiUser size={20} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-16">
          <Outlet />
        </main>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-10 bg-white dark:bg-navy-800 border-t border-gray-200 dark:border-navy-700">
          <div className="flex items-center justify-around">
            <MobileNavLink to="/" icon={<FiHome size={20} />} label="Home" active={location.pathname === '/'} />
            <MobileNavLink to="/explore" icon={<FiSearch size={20} />} label="Explore" active={location.pathname === '/explore'} />
            <MobileNavLink to="/learning" icon={<FiBook size={20} />} label="Learning" active={location.pathname === '/learning'} />
            <MobileNavLink to="/teaching" icon={<FiVideo size={20} />} label="Teaching" active={location.pathname === '/teaching'} />
            <MobileNavLink to="/profile" icon={<FiUser size={20} />} label="Profile" active={location.pathname === '/profile'} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Desktop Navigation Link
const NavLink = ({ to, icon, label, active }) => {
  const { theme } = useTheme();
  
  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 rounded-lg transition-all duration-200 ${
        active
          ? theme === 'dark'
            ? 'bg-navy-700 text-blue-400'
            : 'bg-blue-50 text-blue-600'
          : theme === 'dark'
            ? 'text-gray-300 hover:bg-navy-700 hover:text-blue-400'
            : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
      }`}
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

// Mobile Navigation Link
const MobileNavLink = ({ to, icon, label, active }) => {
  const { theme } = useTheme();
  
  return (
    <Link
      to={to}
      className={`flex flex-col items-center py-3 px-4 ${
        active
          ? theme === 'dark'
            ? 'text-blue-400'
            : 'text-blue-600'
          : theme === 'dark'
            ? 'text-gray-400'
            : 'text-gray-500'
      }`}
    >
      <span>{icon}</span>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default App;