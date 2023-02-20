import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const mediaQuery =
    typeof window !== "undefined" ? window.matchMedia(query) : undefined;

  const [isMatchQuery, setIsMatchQuery] = useState<boolean>(
    mediaQuery?.matches ?? false
  );

  useEffect(() => {
    if (!mediaQuery) return;

    const handler = (media: MediaQueryListEvent) => {
      setIsMatchQuery(media.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMatchQuery;
};

export default useMediaQuery;
