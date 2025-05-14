import { useState, useEffect, useRef } from 'react'


export function useHover() {
  const ref = useRef(null);

  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  useEffect(() => {
    const elm = ref.current as unknown;
    if (elm instanceof HTMLElement) {
      elm.addEventListener('mouseover', handleMouseOver);
      elm.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        elm.removeEventListener('mouseover', handleMouseOver);
        elm.removeEventListener('mouseleave', handleMouseLeave);
      }
    }
  }, []);


  return {
    hovered,
    ref
  }
}