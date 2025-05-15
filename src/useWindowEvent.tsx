import { useEffect } from 'react';

// custom hook. Позволяет задавать обработчики для различных событий window. Снятие обработчиков вып-ется авт.
export function useWindowEvent(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}

