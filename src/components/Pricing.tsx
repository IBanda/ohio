import { Subtitle, Title } from './Typography';
import Button from './Button';
import PriceCard from './PriceCard';

export default function Pricing() {
  return (
    <section id="pricing" className="container my-20">
      <p className="text-gray-400 mb-4 uppercase font-bold">Plans</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="max-w-md mb-8">
          <Title className="mb-4">Affordable pricing. Easy scaling.</Title>
          <Subtitle className="mb-4">
            Our app works for businesses of all sizes and shapes. Starting at
            <a href="/">
              <strong> just $5 for an agent.</strong>
            </a>
          </Subtitle>
          <Button className="bg-transparent border border-solid border-black text-black py-1 px-3 hover:text-white">
            Get the Tool
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
          <div className="">
            <PriceCard type="standard" price={5} />
            <p className="mt-8 tracking-tighter font-medium">
              * Billed as $5 yearly (auto-renewal)
            </p>
          </div>
          <div className="">
            <PriceCard type="premium" price={9} />
            <p className="mt-8 tracking-tighter font-medium">
              * Billed as $9 yearly (auto-renewal)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
