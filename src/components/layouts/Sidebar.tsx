'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sideAdminLinks, sideLinks } from '@/constants/routes';
import { selectIsAuthenticated, selectUser } from '@/store/selectors/authSelectors';
import { UserRole } from '@/types/enums';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/slices/authSlice';
import { CiLogout } from "react-icons/ci";
import { useRouter } from 'next/router';
import { cn } from '@/utils/twMerge';
import { normalizePath } from '@/utils/normalizePath';

export default function Sidebar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const pathname = usePathname();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const handleLogout = (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    dispatch(logout());
    router.push('/login');
  };

  // Loading or unauthenticated
  if (!isAuthenticated) return null;
  const role = user?.role as UserRole;
  const links = role === UserRole.Admin ? sideAdminLinks : sideLinks;


  const isActive = (path: string) =>
    normalizePath(pathname) === normalizePath(path)
      ? 'text-main bg-secondary font-bold'
      : 'text-fourth';

  return (
    <div className="fixed bottom-0 md:left-0 md:top-0 z-50 w-full h-16 md:h-screen md:w-16 bg-third flex md:flex-col overflow-x-auto md:overflow-hidden border-t md:border-t-0 md:border-r border-gray-200">
      <div className="flex w-full md:w-16 h-16 md:h-auto flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-10 items-center justify-center md:justify-center px-4 md:px-0">
        {links.map(({ title, path, icon: Icon }) => (
          <Link
            key={path}
            href={path}
            className={cn(
              'flex items-center rounded-lg cursor-pointer hover:text-main hover:bg-fourth hover:duration-300 hover:ease-linear focus:bg-secondary focus:text-main shrink-0',
              isActive(path)
            )}
            title={title}
          >
            <div className="h-10 w-10 flex items-center justify-center">
              <Icon className="text-xl md:text-inherit" />
            </div>
          </Link>
        ))}
      <div className="shrink-0 ml-auto md:ml-0 md:mt-auto">
        <button
          key={"logout"}
          onClick={handleLogout}
          className="flex items-center rounded-lg cursor-pointer text-dark-third bg-fourth hover:duration-300 hover:ease-linear focus:bg-secondary focus:text-main"
          title="Logout"
        >
          <div className="h-10 w-10 flex items-center justify-center">
            <CiLogout className="text-xl font-extrabold" />
          </div>
        </button>
      </div>
      </div>
    </div>
  );
}