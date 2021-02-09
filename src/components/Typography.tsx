interface Props {
  children: React.ReactNode;
  className?: string;
}
export const Title = ({ children, className }: Props) => (
  <h2 className={'text-4xl  xl:text-5xl font-bold tracking-tight ' + className}>
    {children}
  </h2>
);

export const Subtitle = ({ children, className }: Props) => (
  <p className={'text-lg font-normal mb-8 ' + className}>{children}</p>
);
