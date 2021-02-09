import { XIcon } from '@primer/octicons-react';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  isOpen: boolean;
}

const modal = document.getElementById('modal') as HTMLElement;
const div = document.createElement('div');
const body = document.body;

export default function Modal({ children, onClick, isOpen }: Props) {
  const elRef = useRef<HTMLDivElement | null>();
  React.useEffect(() => {
    if (isOpen) {
      elRef.current = div;
      modal.appendChild(elRef.current);
      body.classList.add('overflow-hidden');
    }
    return () => {
      if (elRef.current) {
        modal.removeChild(elRef.current);
        body.classList.remove('overflow-hidden');
        elRef.current = null;
      }
    };
  }, [isOpen]);

  return ReactDOM.createPortal(
    <div
      className={`fixed left-0 top-0 w-full h-full   transition-transform delay-75 duration-500 transform-gpu bg-black z-20 flex items-center justify-center ${
        isOpen ? '' : '-translate-y-full'
      }`}
    >
      <button
        onClick={onClick}
        className="focus:outline-none bg-transparent text-white fixed right-5  top-5"
      >
        <XIcon size="medium" />
      </button>
      {children}
    </div>,
    div
  );
}
