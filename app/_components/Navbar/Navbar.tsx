'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import NavButtonMobile from './NavButtonMobile';
import appConfig from '../../../app-config.json';
import appRoutes from '@/app/_lib/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const Navbar = ({ children }: Props) => {
  const drawerHtmlFor = 'nav-drawer';
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSideNavOpen(e.target.checked);
  };

  const pathname = usePathname();

  useEffect(() => {
    if (isSideNavOpen) {
      document?.getElementById(drawerHtmlFor)?.click();
    }
  }, [pathname]);

  const isActiveRoute = (route: string, exact = false) => {
    if (exact) {
      return route === pathname;
    }
    return pathname.includes(route);
  };

  const routeElements = appRoutes.map((option, index) => (
    <li key={option + `_${index}`}>
      <Link
        href={option.route}
        className={`${
          isActiveRoute(option.route, option.route === '/')
            ? 'underline decoration-wavy decoration-accent underline-offset-4'
            : ''
        }`}
      >
        {option.title}
      </Link>
    </li>
  ));

  return (
    <div className="drawer">
      <input
        id={drawerHtmlFor}
        type="checkbox"
        onChange={onInputChange}
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar fixed glass z-50 grid grid-flow-col justify-between pr-4 lg:pr-2 lg:pl-4">
          <NavButtonMobile isOpen={isSideNavOpen} htmlFor={drawerHtmlFor} />
          <h1 className="font-allura text-2xl lg:text-4xl">
            {appConfig.organizationData.name}
          </h1>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {routeElements}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side pt-16 z-40">
        <label
          htmlFor={drawerHtmlFor}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-full max-w-lg min-h-full bg-neutral text-4xl justify-center gap-8">
          {/* Sidebar content here */}
          {routeElements}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
