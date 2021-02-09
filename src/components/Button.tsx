interface Props {
  children: React.ReactNode;
  link?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  link,
  href,
  className,
  onClick,
}: Props) {
  const styles = {
    className: '  font-medium rounded-md hover:bg-primary ' + className,
  };
  const Button = link ? (
    <a href={href} {...styles}>
      {children}
    </a>
  ) : (
    <button {...styles} onClick={onClick}>
      {children}
    </button>
  );
  return Button;
}
