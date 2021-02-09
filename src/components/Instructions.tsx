import Tabs from './Tabs';
import { Subtitle, Title } from './Typography';

export default function Instructions() {
  return (
    <section id="getstarted" className="p-0 lg:p-16 xl:px-28 ">
      <div className="bg-light-green p-4 lg:p-8">
        <div className="text-center max-w-lg mx-auto mb-12">
          <p className="uppercase font-medium text-gray-500 py-6">
            #DATATRACKING APP
          </p>
          <Title className="mb-8 max-w-sm mx-auto">
            What to expect? Easy setup.
          </Title>
          <Subtitle>
            Helping SaaS teams to increase e-commerce conversions, reduce bounce
            rate, and scale up fast.
          </Subtitle>
        </div>
        <Tabs />
      </div>
    </section>
  );
}
