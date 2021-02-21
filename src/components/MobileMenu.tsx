import { useState } from 'react';
import Button from './RoundBtn';

export default function MobileMenu() {
  const [isMenuOpen, setMenu] = useState(false);

  return (
    <>
      <Button className="bg-gray-50 p-5" onClick={() => setMenu(true)}>
        <img className="w-5 " src="/images/bars.png" alt="menu" />
      </Button>
      <nav
        className={` fixed  bg-black bg-opacity-90 w-full h-full top-0 left-0 z-20  transition-transform transition-opacity delay-75 duration-500 transform-gpu ${
          isMenuOpen ? 'opacity-1' : '-translate-x-full opacity-0'
        }`}
      >
        <div className="container m-0  bg-white w-10/12 h-full opacity-1">
          <div className=" pt-3 pb-8">
            <Button className="bg-gray-50 p-5" onClick={() => setMenu(false)}>
              <img className="w-5 " src="/images/x-icon.png" alt="menu" />
            </Button>
          </div>
          <ul className="font-medium">
            <li className="mb-6">
              <a href="/">Home</a>
            </li>
            <li className="mb-6  whitespace-nowrap">
              <a href="#features">Features</a>
            </li>
            <li className="mb-6  whitespace-nowrap">
              <a href="#blog">Blog</a>
            </li>
            <li className="mb-6  whitespace-nowrap">
              <a href="#getstarted">Get started</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
