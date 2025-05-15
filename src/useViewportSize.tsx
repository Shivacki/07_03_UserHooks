import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'


export function useViewportSize() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  
  const handleResize = (event: Event) => {
    const target = event.target as Window;
    setHeight(target.innerHeight);
    setWidth(target.innerWidth);
  };
  
  useWindowEvent('resize', handleResize);


  return { 
    height, 
    width 
  }
}