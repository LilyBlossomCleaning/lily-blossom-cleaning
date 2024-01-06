'use client';
import { ChangeEvent, useState } from 'react';
import NavButtonMobile from './NavButtonMobile';

type Props = {
  children: React.ReactNode;
};

const Navbar = ({ children }: Props) => {
  const drawerHtmlFor = 'nav-drawer';
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSideNavOpen(e.target.checked);
  };

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
        <div className="w-full navbar fixed glass z-50">
          <NavButtonMobile isOpen={isSideNavOpen} htmlFor={drawerHtmlFor} />
          <div className="flex-1 px-2 mx-2">Navbar Title</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
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
        <ul className="menu p-4 w-80 min-h-full bg-neutral">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
