import React from 'react';
import Button from './Button';
import MobileMenu from './MobileMenu';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-3  py-5">
          <div className="col-span-1 flex items-center">
            <div className="mr-2 inline lg:hidden">
              <MobileMenu />
            </div>
            <img src="/images/Logo.svg" alt="logo" />
          </div>
          <div className="col-span-1 hidden lg:block">
            <Nav />
          </div>
          <div className=" col-span-1  flex items-center justify-end">
            <Button className="bg-secondary text-white py-1 px-3">
              <span className="hidden sm:inline">Sales </span>
              Questions?
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
