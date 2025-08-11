import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo5 from "../assets/images/rooms/logo5.png";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div
        className={`${
          header ? "py-3 shadow-lg" : "py-1"
        } fixed z-50 w-full bg-gray-900 text-white transition-all duration-500`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Header Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo5} 
              alt="Royal Heights Logo" 
              className={`transition-all duration-300 ${
                header ? "w-16" : "w-20"
              }`} 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-8 font-tertiary text-lg uppercase tracking-wide">
              <li>
                <Link 
                  to="/" 
                  className={`transition-colors duration-200 hover:text-amber-400 ${
                    isActive('/') ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/rooms" 
                  className={`transition-colors duration-200 hover:text-amber-400 ${
                    isActive('/rooms') ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link 
                  to="/restaurants" 
                  className={`transition-colors duration-200 hover:text-amber-400 ${
                    isActive('/restaurants') ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`transition-colors duration-200 hover:text-amber-400 ${
                    isActive('/contact') ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`transition-colors duration-200 hover:text-amber-400 ${
                    isActive('/about') ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* User Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {isAuthenticated() ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-300">
                  Welcome, {user.name}
                </span>
                {user.role === 'admin' && (
                  <button 
                    onClick={() => navigate('/admin')}
                    className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                  >
                    Admin Panel
                  </button>
                )}
                <button 
                  onClick={handleLogout}
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => navigate('/auth/login')}
                className="rounded-lg bg-blue-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-600"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden rounded-lg p-2 text-white hover:bg-gray-800"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="border-t border-gray-700 bg-gray-800 px-4 py-6">
              <nav className="mb-6">
                <ul className="space-y-4 font-tertiary text-lg uppercase tracking-wide">
                  <li>
                    <Link 
                      to="/" 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block transition-colors duration-200 hover:text-amber-400 ${
                        isActive('/') ? 'text-amber-400' : 'text-white'
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/rooms" 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block transition-colors duration-200 hover:text-amber-400 ${
                        isActive('/rooms') ? 'text-amber-400' : 'text-white'
                      }`}
                    >
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/restaurants" 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block transition-colors duration-200 hover:text-amber-400 ${
                        isActive('/restaurants') ? 'text-amber-400' : 'text-white'
                      }`}
                    >
                      Restaurants
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact" 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block transition-colors duration-200 hover:text-amber-400 ${
                        isActive('/contact') ? 'text-amber-400' : 'text-white'
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/about" 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block transition-colors duration-200 hover:text-amber-400 ${
                        isActive('/about') ? 'text-amber-400' : 'text-white'
                      }`}
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile User Actions */}
              <div className="border-t border-gray-700 pt-6">
                {isAuthenticated() ? (
                  <div className="space-y-3">
                    <div className="text-sm text-gray-300">
                      Welcome, {user.name}
                    </div>
                    {user.role === 'admin' && (
                      <button 
                        onClick={() => {
                          navigate('/admin');
                          setMobileMenuOpen(false);
                        }}
                        className="w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                      >
                        Admin Panel
                      </button>
                    )}
                    <button 
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => {
                      navigate('/auth/login');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
