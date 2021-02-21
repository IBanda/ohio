export default function animateValue(
  obj: HTMLDivElement,
  start: number,
  end: number,
  duration: number
) {
  let startTimestamp = 0;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = String(Math.floor(progress * (end - start) + start));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
