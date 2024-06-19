'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const links = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About Us' },
  { href: '#services', text: 'Services' },
  { href: '#contact', text: 'Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string,
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className='bg-[#987070] text-white py-4 fixed top-0 left-0 right-0 z-10'>
      <div className='mx-auto px-4 sm:px-6 lg:px-14'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='bg-[#F1E5D1] hover:bg-stone-400 text-black p-2 lg:hidden mr-4'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </Button>
            <Link href='/'>
              <h3 className='text-white font-semibold text-2xl'>SEA Salon</h3>
            </Link>
          </div>
          <div className='hidden lg:flex space-x-6 items-center'>
            {links.map((link, index) => (
              <div key={index} className='relative'>
                <Button
                  variant='link'
                  asChild
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <Link href={link.href} className='text-white'>
                    {link.text}
                  </Link>
                </Button>
              </div>
            ))}
            <Button className='text-white bg-rose-300 hover:bg-rose-400 px-4 py-2 rounded-md'>
              <Link href='/login'>Login</Link>
            </Button>
            <Button className='text-black bg-[#F1E5D1] hover:bg-stone-400 px-4 py-2 rounded-md'>
              <Link href='/register'>Register</Link>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className='lg:hidden mt-4 flex flex-col items-center space-y-4'>
            {links.map((link, index) => (
              <div key={index}>
                <Link href={link.href} className='block text-white'>
                  {link.text}
                </Link>
              </div>
            ))}
            <div className='w-full flex justify-center'>
              <Button className='w-11/12 text-white bg-rose-300 hover:bg-rose-400 px-4 py-2 rounded-md'>
                <Link href='/auth/login'>Login</Link>
              </Button>
            </div>
            <div className='w-full flex justify-center'>
              <Button className='w-11/12 text-black bg-[#F1E5D1] hover:bg-stone-400 px-4 py-2 rounded-md'>
                <Link href='/auth/register'>Register</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
