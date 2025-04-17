import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Установка начального значения
    handleResize();

    // Добавление слушателя события
    window.addEventListener("resize", handleResize);

    // Очистка слушателя события
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return !!isMobile;
}

export default useIsMobile;
