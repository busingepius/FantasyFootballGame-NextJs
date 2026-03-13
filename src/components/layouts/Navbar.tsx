'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constants/routes';
import { appConfigs } from '@/constants/configs';
import Image from 'next/image';
import { IoMdLogIn } from "react-icons/io";
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectUser } from '@/store/selectors/authSelectors';
import { MdDashboard } from "react-icons/md";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const pathname = usePathname();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) =>
    pathname === path ? 'text-main font-bold' : 'text-fourth hover:text-main';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='sticky top-0 z-50 bg-secondary/90 backdrop-blur shadow-md py-4 px-4 md:px-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image src={appConfigs.logo} width={50} height={100} alt='' />
          <h1 className={`text-xl font-bold text-main ml-2`}>{appConfigs.appName}</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(({ title, path, icon: Icon }) => (
            <Link
              key={path}
              href={path}
              className={`flex items-center gap-1 ${isActive(path)}`}
            >
              <Icon className='' />
              <span className='pl-1'>{title}</span>
            </Link>
          ))}
        </nav>

        <div className='hidden md:flex items-center'>
          {isAuthenticated ? (
            <Link
              key={"d5555555ashboard"}
              href={"/dashboard"}
              className='btn flex items-center bg-fourth text-main hover:bg-main hover:text-fourth px-6 py-2 rounded-full uppercase font-bold'
            >
              <MdDashboard className='text-xl' />
              <span className='pl-1'>Dashboard</span>
            </Link>
          ) : (
            <Link
              key={"login"}
              href={"/login"}
              className='btn flex items-center bg-fourth text-main hover:bg-main hover:text-fourth px-6 py-2 rounded-full uppercase font-bold'
            >
              <IoMdLogIn className='text-xl' />
              <span className='pl-1'>Login</span>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-secondary p-4 rounded-lg shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ title, path, icon: Icon }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 ${isActive(path)} text-lg`}
              >
                <Icon className='' />
                <span>{title}</span>
              </Link>
            ))}
          </nav>
          <div className='mt-2 border-t border-gray-600 pt-4 flex justify-center'>
            {isAuthenticated ? (
              <Link
                href={"/dashboard"}
                onClick={() => setIsOpen(false)}
                className='w-full btn flex items-center justify-center bg-fourth text-main hover:bg-main hover:text-fourth px-6 py-2 rounded-full uppercase font-bold'
              >
                <MdDashboard className='text-xl' />
                <span className='pl-1'>Dashboard</span>
              </Link>
            ) : (
              <Link
                href={"/login"}
                onClick={() => setIsOpen(false)}
                className='w-full btn flex items-center justify-center bg-fourth text-main hover:bg-main hover:text-fourth px-6 py-2 rounded-full uppercase font-bold'
              >
                <IoMdLogIn className='text-xl' />
                <span className='pl-1'>Login</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
