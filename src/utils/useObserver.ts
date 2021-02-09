import { useCallback, useEffect, useRef } from 'react';

export default function useObserver(cb: () => void) {
  const observerRef = useRef<IntersectionObserver>();
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cb();
          }
        });
      },
      { threshold: 1.0 }
    );
    observerRef.current = observer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getObserver = useCallback(
    () => (element: HTMLDivElement | null) => {
      if (element) {
        observerRef.current?.observe(element);
      }
    },
    []
  );

  return { getObserver };
}
