import { ArrowRightIcon } from '@primer/octicons-react';

type Props = {
  href?: string;
};
export default function LinkWithArrow({ href = '/' }: Props) {
  return (
    <a className="font-medium hover:text-primary flex items-center" href={href}>
      Read More
      <ArrowRightIcon className="mt-1" />
    </a>
  );
}
