'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `fixed mx-auto top-0 left-0 right-0 z-10 bg-[${
    scrolling ? '#f45b6a' : 'bg-transparent'
  }] bg-opacity-100`;

  return (
    <nav className={navbarClasses}>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-10 py-2">
        <Link
          href={'/'}
          className={`text-1xl md:text-3xl ${
            scrolling ? 'text-white' : 'text-[#231942]'
          } font-semibold`}
        >
          Ikhsan FD
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className={`flex items-center px-3 py-2 border rounded ${
                scrolling
                  ? 'border-white text-white'
                  : 'border-[#231942] text-[#231942]'
              } hover:text-white hover:border-white`}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className={`flex items-center px-3 py-2 border rounded ${
                scrolling
                  ? 'border-white text-white'
                  : 'border-[#231942] text-[#231942]'
              } hover:text-white hover:border-white`}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
