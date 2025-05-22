import { useViewportSize } from '../../hooks/useViewportSize';

export function DemoViewportSize() {
  const { height, width } = useViewportSize();

  return (
    <>
      Viewport size observer: Width: {width}, Height: {height}
    </>
  );
}

