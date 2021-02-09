interface Props {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function MobileMenuBtn({ onClick, children, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={'inline   rounded-full  focus:outline-none ' + className}
    >
      {children}
    </button>
  );
}
