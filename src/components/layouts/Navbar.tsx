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

export default function Header() {
  const pathname = usePathname();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  console.log("USER",user)
  const isActive = (path: string) =>
    pathname === path ? 'text-main font-bold' : 'text-fourth hover:text-main';

  return (
    <header className='sticky top-0 z-50 bg-secondary/90 backdrop-blur shadow-md py-4 px-4 md:px-6 flex flex-wrap gap-4 items-center justify-between'>
      <div className='flex items-center'>
        <Image src={appConfigs.logo} width={50} height={100} alt='' />
        <h1 className={`text-xl font-bold text-main hidden sm:block`}>{appConfigs.appName}</h1>
      </div>
      <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
        {navLinks.map(({ title, path, icon: Icon }) => (
          <Link
            key={path}
            href={path}
            className={`flex items-center gap-1 ${isActive(path)}`}
          >
            <Icon className='' />
            <span className='pl-1 hidden sm:inline'>{title}</span>
          </Link>
        ))}
      </nav>
      <div className='flex items-center'>
        {isAuthenticated ? (
          <Link
            key={"d5555555ashboard"}
            href={"/dashboard"}
            className='btn flex items-center bg-fourth text-main hover:bg-main hover:text-fourth px-4 md:px-6 py-2 rounded-full uppercase font-bold text-sm md:text-base'
          >
            <MdDashboard className='text-xl' />
            <span className='pl-1 hidden sm:inline'>Dashboard</span>
          </Link>
        ) : (
          <Link
            key={"login"}
            href={"/login"}
            className='btn flex items-center bg-fourth text-main hover:bg-main hover:text-fourth px-4 md:px-6 py-2 rounded-full uppercase font-bold text-sm md:text-base'
          >
            <IoMdLogIn className='text-xl' />
            <span className='pl-1 hidden sm:inline'>Login</span>
          </Link>
        )}
      </div>
    </header>
  );
}