import { useState, useEffect, useMemo } from "react";

const useOnScreen = <T extends Element | null>(
  ref: React.MutableRefObject<T>,
  triggerOnce = false,
  rootMargin = "0px"
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof IntersectionObserver === "undefined") return;
    return new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
  }, [rootMargin]);

  useEffect(() => {
    const screenRef = ref.current;
    if (screenRef) observer?.observe(screenRef);

    return () => {
      if (!screenRef) return;
      observer?.unobserve(screenRef);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observer]);

  useEffect(() => {
    if (!isIntersecting || !ref.current || !observer || !triggerOnce) return;
    observer.unobserve(ref.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting, observer]);

  return isIntersecting;
};

export default useOnScreen;
