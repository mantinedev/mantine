import { useEffect, useRef } from 'react';
import { useLightboxContext } from '../lightbox.context';
import type { LightboxVideoSlide } from '../lightbox.types';

interface VideoSlideProps {
  slide: LightboxVideoSlide;
  active: boolean;
}

export function VideoSlide({ slide, active }: VideoSlideProps) {
  const ctx = useLightboxContext();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!active && videoRef.current) {
      videoRef.current.pause();
    }
  }, [active]);

  return (
    /* eslint-disable jsx-a11y/media-has-caption */
    <video
      ref={videoRef}
      {...ctx.getStyles('slideVideo')}
      src={slide.src}
      poster={slide.poster}
      autoPlay={active && slide.autoPlay}
      controls
      playsInline
    />
    /* eslint-enable jsx-a11y/media-has-caption */
  );
}

VideoSlide.displayName = '@mantine/lightbox/VideoSlide';
