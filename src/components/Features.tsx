import { useState } from 'react';
import Button from './Button';
import LinkWithArrow from './LinkWithArrow';
import Modal from './Modal';
import RoundButton from './RoundBtn';
import { Subtitle, Title } from './Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import features from '../data/features';

export default function Features() {
  const [modal, setModal] = useState(false);
  return (
    <section id="features" className="p-0 lg:p-16 xl:px-28 ">
      <div className="bg-custom-gray px-4 lg:px-10 pt-10 lg:pt-16">
        <div className="grid md:grid-cols-5 mb-12">
          <div className="md:col-span-2">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <span className="animate-ping absolute bg-black h-11 w-11 rounded-full bg-opacity-3" />
              <RoundButton
                className="bg-secondary p-4 relative z-10"
                onClick={() => setModal(true)}
              >
                <img className="w-7" src="/images/play.png" alt="play" />
              </RoundButton>
            </div>
            <p className="uppercase font-medium text-gray-500 py-8">
              #datatracking app
            </p>
            <Title className="mb-6 lg:pr-5">
              The app is great for basic setup and adjusts.
            </Title>
            <Subtitle className=" mb-8">
              So how does it work? Let’s check our{' '}
              <strong>Getting Started </strong>
              tutorial or choose from pre-made templates.
            </Subtitle>

            <Button className="bg-transparent border border-solid border-black text-black py-1 px-3 hover:text-white">
              Explore Features
            </Button>
          </div>
          <div className="md:col-span-3 flex items-end justify-center mt-12 lg:mt-0">
            <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
              <img
                className=" md:max-w-md   xl:max-w-2xl"
                src="/images/oh__demo26__2-min.png"
                alt="oh__demo26__2-min"
              />
            </ScrollAnimation>
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="col-span-1 border-t border-gray-600 py-8 md:py-14"
            >
              <Feature
                src={feature.src}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal onClick={() => setModal(false)} isOpen={modal}>
        <iframe
          title="yt-modal"
          width="1263"
          height="555"
          src="https://www.youtube.com/embed/t67_zAg5vvI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </section>
  );
}
interface Props {
  src: string;
  title: string;
  description: string;
}

function Feature({ src, title, description }: Props) {
  return (
    <div>
      <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center">
        <img
          className="w-7"
          src={`/images/${src}.png`}
          alt={src.split('.')[0]}
        />
      </div>
      <h3 className="text-xl font-semibold my-5">{title}</h3>
      <p className="mb-4 font-normal">{description}</p>
      <LinkWithArrow />
    </div>
  );
}
