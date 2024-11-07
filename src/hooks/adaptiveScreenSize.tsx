import { useEffect, useState } from 'react';
export enum Adaptive {
  mobile = 'mobile',
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  xxl = 'xxl',
}
interface UseAdaptiveScreenSizeProps {
  onMobileEnter?: () => void;
  onExtraSmallEnter?: () => void;
  onSmallEnter?: () => void;
  onMediumEnter?: () => void;
  onLargeEnter?: () => void;
  onExtraLargeEnter?: () => void;
  onDoubleExtraLargeEnter?: () => void;
}

function useAdaptiveScreenSize({
  onMobileEnter,
  onExtraSmallEnter,
  onSmallEnter,
  onMediumEnter,
  onLargeEnter,
  onExtraLargeEnter,
  onDoubleExtraLargeEnter,
}: UseAdaptiveScreenSizeProps): Adaptive {
  const [width, setwidth] = useState<Adaptive>(Adaptive.xl);
  useEffect(() => {
    const handleSize = () => {
      if (!window) return Adaptive.xl;
      const { innerWidth } = window;
      if (innerWidth < 680) {
        onMobileEnter && onMobileEnter();
        return setwidth(Adaptive.mobile);
      }
      if (innerWidth < 768) {
        onExtraSmallEnter && onExtraSmallEnter();
        return setwidth(Adaptive.xs);
      }
      if (innerWidth < 1024) {
        onSmallEnter && onSmallEnter();
        return setwidth(Adaptive.s);
      }
      if (innerWidth < 1280) {
        onMediumEnter && onMediumEnter();
        return setwidth(Adaptive.m);
      }
      if (innerWidth < 1440) {
        onLargeEnter && onLargeEnter();
        return setwidth(Adaptive.l);
      }
      if (innerWidth < 2160) {
        onExtraLargeEnter && onExtraLargeEnter();
        return setwidth(Adaptive.xl);
      }
      onDoubleExtraLargeEnter && onDoubleExtraLargeEnter();
      return setwidth(Adaptive.xxl);
    };
    window.addEventListener('resize', handleSize);
    handleSize();
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [
    onMobileEnter,
    onExtraSmallEnter,
    onSmallEnter,
    onMediumEnter,
    onLargeEnter,
    onExtraLargeEnter,
    onDoubleExtraLargeEnter,
  ]);
  return width;
}

export default useAdaptiveScreenSize;