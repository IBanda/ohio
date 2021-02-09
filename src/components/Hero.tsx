import Button from './Button';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Hero() {
  return (
    <section className="container">
      <div className="hero pt-12">
        <div className="max-w-xl text-center mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-5">
            Data tracking starts here
          </h1>
          <p className="text-lg">
            Give customers a structutal experience they’ll and come back.
          </p>
          <p className="text-lg mb-10">
            <strong>Join #1 app </strong>
            to track your data.
          </p>
          <Button className="py-3 px-4 bg-secondary text-white">
            Sign Up for Free
          </Button>
        </div>
        <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
          <img
            className=" md:max-w-md lg:max-w-3xl mx-auto mt-5 lg:mt-0"
            src="/images/oh__demo26__1a-min.png"
            alt="hero_image"
          />
        </ScrollAnimation>
        <p className="text-lg text-center my-8">
          Join <strong>2,5K+</strong>
          software businesses growing with Colabrio.
        </p>
      </div>
    </section>
  );
}
