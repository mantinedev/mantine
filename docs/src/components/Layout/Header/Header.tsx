import React from 'react';
import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile } from './HeaderMobile';

interface HeaderProps {
  navbarOpened: boolean;
  toggleNavbar(): void;
}

export default function Header({ navbarOpened, toggleNavbar }: HeaderProps) {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile navbarOpened={navbarOpened} toggleNavbar={toggleNavbar} />
    </>
  );
}
