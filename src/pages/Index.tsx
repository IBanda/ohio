import Blog from '../components/Blog';
import Brands from '../components/Brands';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import GettingStarted from '../components/GettingStarted';
import Hero from '../components/Hero';
import Instructions from '../components/Instructions';
import Pricing from '../components/Pricing';
import SignupForm from '../components/SignupForm';
import { Subtitle, Title } from '../components/Typography';

export default function Index() {
  return (
    <>
      <Hero />
      <Brands />
      <Features />
      <div className="container">
        <div className="max-w-lg mx-auto text-center py-12">
          <Title className=" mb-8">Save your data, wherever you are.</Title>
          <Subtitle className="mb-8">
            Helping SaaS teams to increase e-commerce conversions, reduce bounce
            rate, and scale up fast.
          </Subtitle>
          <SignupForm />
          <p className="text-lg mt-4">
            Already using our service?{' '}
            <a href="/">
              <strong>Sign In </strong>
            </a>
          </p>
        </div>
      </div>
      <GettingStarted />
      <Blog />
      <Instructions />
      <Pricing />
      <FAQ />
      <div className="text-white text-center bg-secondary p-3 mt-16 ">
        © {new Date().getFullYear()}, Ohio. All Rights Reserved
      </div>
    </>
  );
}
