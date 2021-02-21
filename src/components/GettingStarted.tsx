import { Subtitle, Title } from './Typography';
import useObserver from '../utils/useObserver';
import { useEffect, useRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import animateValue from '../utils/animateValue';

export default function GettingStarted() {
  const projectRef = useRef<HTMLHeadingElement>(null);
  const campaignRef = useRef<HTMLHeadingElement>(null);

  const { getObserver } = useObserver(() => {
    if (projectRef.current && campaignRef.current) {
      animateValue(projectRef.current, 0, 390, 1000);
      animateValue(campaignRef.current, 0, 248, 1000);
    }
  });

  useEffect(() => {
    const observe = getObserver();
    observe(projectRef.current);
    observe(campaignRef.current);
  });

  return (
    <section className="p-0 lg:p-16 xl:px-28 ">
      <div className="grid md:grid-cols-2 bg-custom-gray px-4 lg:px-0 pt-20 pb-16">
        <div className="col-span-1 lg:pl-12">
          <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
            <img
              className=" md:max-w-xs   xl:max-w-lg  "
              src="/images/oh__demo26__3-min.png"
              alt="oh__demo26__3-min"
            />
          </ScrollAnimation>
        </div>
        <div className="col-span-1  xl:pr-32">
          <p className="uppercase font-medium text-gray-500 py-6">
            THE NUMBER ONE #DATATRACKING APP
          </p>
          <Title className=" max-w-md mb-8">
            Keep pushing forward. We've got your back.
          </Title>
          <Subtitle className="max-w-lg  mb-8">
            So how does it work? Let’s check our
            <a href="/">
              <strong> Getting Started </strong>
            </a>
            tutorial or choose from pre-made templates.
          </Subtitle>
          <div className="flex items-center">
            <div className="border-t border-black pt-8 mr-10">
              <div className="flex items-center">
                <h3 ref={projectRef} className="text-4xl font-bold s-projects">
                  <span className="visually-hidden">390</span>
                </h3>
                <span className="text-primary text-2xl font-extrabold ml-1">
                  +
                </span>
              </div>
              <p className="font-semibold  text-base">Success Projects</p>
            </div>
            <div className="border-t border-black pt-8">
              <div className="flex items-center">
                <h3
                  ref={campaignRef}
                  className="text-4xl font-bold p-campaigns"
                >
                  <span className="visually-hidden">248</span>
                </h3>
                <span className="text-primary text-2xl font-extrabold ml-1 ">
                  +
                </span>
              </div>
              <p className="font-semibold tracking-tighter text-base">
                Promo Campaigns
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
