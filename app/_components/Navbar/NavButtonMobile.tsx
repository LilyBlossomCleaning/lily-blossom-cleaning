'use client';
import { Divide } from 'hamburger-react';

type Props = {
  isOpen: boolean;
  htmlFor: string;
};

const NavButtonMobile = ({ isOpen, htmlFor }: Props) => {
  return (
    <div className="flex-none lg:hidden">
      <label
        htmlFor={htmlFor}
        aria-label="open sidebar"
        className="btn btn-square btn-ghost"
      >
        <Divide toggled={isOpen} size={24} />
      </label>
    </div>
  );
};

export default NavButtonMobile;
