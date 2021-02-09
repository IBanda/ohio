import React from 'react';

export default function Nav() {
  return (
    <nav className="h-full flex items-center justify-center">
      <ul className="list-none p-0 m-0 flex items-center font-medium">
        <li className=" mr-12 whitespace-nowrap">
          <a href="/">Home</a>
        </li>
        <li className="mr-12  whitespace-nowrap">
          <a href="#features">Features</a>
        </li>
        <li className="mr-12  whitespace-nowrap">
          <a href="#blog">Blog</a>
        </li>
        <li className="mr-12  whitespace-nowrap">
          <a href="#getstarted">Get started</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
      </ul>
    </nav>
  );
}
