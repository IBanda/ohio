import { CheckIcon, XIcon } from '@primer/octicons-react';
import Button from './Button';

interface Props {
  price: number;
  type: string;
}

export default function PriceCard({ price, type }: Props) {
  return (
    <div className={`price-card ${type} p-8 md:p-4 lg:p-8 rounded-xl xl:w-72 `}>
      <h5 className="tracking-tighter font-semibold text-lg capitalize">
        {type}
      </h5>
      <h1 className="font-bold text-5xl md:text-7xl tracking-tighter mb-4">
        ${price}
      </h1>
      <div className="bg-gray-300 bg-opacity-30 inline-block py-0.5 px-1 text-sm font-medium mb-8 rounded-md">
        <p className="capitalize">annually</p>
      </div>
      <h6 className="font-medium mb-8">
        Get the deal without any risk and fees
      </h6>
      <ul className="mb-8">
        <li className="hover:text-primary  whitespace-nowrap text-sm">
          <CheckIcon />
          <span className="ml-2">Unlimited credits</span>
        </li>
        <li className="hover:text-primary  whitespace-nowrap">
          {type === 'premium' ? <CheckIcon /> : <XIcon />}
          <span className="ml-2">API integration</span>
        </li>
      </ul>
      <Button className="py-1 px-3 tracking-tighter whitespace-nowrap">
        Get Started
      </Button>
    </div>
  );
}
