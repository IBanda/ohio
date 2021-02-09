import { useEffect, useRef } from 'react';
import useObserver from '../utils/useObserver';

type Props = {
  level: number;
  name: string;
};
export default function SkillMeasure({ level, name }: Props) {
  const progressRef = useRef<HTMLDivElement>(null);
  const { getObserver } = useObserver(() => {
    if (progressRef.current) {
      progressRef.current.style.width = level + '%';
      progressRef.current.classList.add('is-visible');
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
            className="bg-primary rounded-l-full relative h-full level-indicator"
          />
        </div>
      </div>
    </div>
  );
}
