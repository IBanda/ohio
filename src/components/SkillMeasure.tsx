import { useEffect, useRef } from 'react';
import animateValue from '../utils/animateValue';
import useObserver from '../utils/useObserver';

type Props = {
  level: number;
  name: string;
};
export default function SkillMeasure({ level, name }: Props) {
  const progressRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const { getObserver } = useObserver(() => {
    if (progressRef.current && indicatorRef.current) {
      progressRef.current.style.width = level + '%';
      progressRef.current.classList.add('is-visible');
      animateValue(indicatorRef.current, 0, level, 1000);
    }
  });

  useEffect(() => {
    const observe = getObserver();
    observe(progressRef.current);
  }, [getObserver]);
  return (
    <div>
      <p className="font-semibold">{name}</p>
      <div className="relative">
        <div className="skill-track bg-gray-400 h-1.5 rounded-full ">
          <div
            ref={progressRef}
            className="bg-primary rounded-l-full relative h-full level-indicator "
          >
            <div className="bg-black text-white px-1.5 py-1 bottom-3 rounded absolute right-0 text-xs indicator">
              <span ref={indicatorRef}></span>%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
