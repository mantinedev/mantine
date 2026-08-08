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
      aria-label={slide.label}
      autoPlay={active && slide.autoPlay}
      controls
      playsInline
    >
      {slide.tracks?.map((track, index) => (
        <track
          key={index}
          src={track.src}
          kind={track.kind ?? 'subtitles'}
          srcLang={track.srcLang}
          label={track.label}
          default={track.default}
        />
      ))}
    </video>
    /* eslint-enable jsx-a11y/media-has-caption */
  );
}

VideoSlide.displayName = '@mantine/lightbox/VideoSlide';
