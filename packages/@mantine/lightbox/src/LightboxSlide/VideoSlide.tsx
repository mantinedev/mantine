import { useEffect, useRef } from 'react';
import type { LightboxSlideStylesApiProps } from './LightboxSlide';
import { useLightboxContext } from '../lightbox.context';
import type { LightboxVideoSlide } from '../lightbox.types';

interface VideoSlideProps {
  slide: LightboxVideoSlide;
  active: boolean;
  stylesApiProps?: LightboxSlideStylesApiProps;
}

export function VideoSlide({ slide, active, stylesApiProps }: VideoSlideProps) {
  const ctx = useLightboxContext();
  const videoRef = useRef<HTMLVideoElement>(null);

  // With `transitionProps.keepMounted` the slides stay mounted while the lightbox is
  // closed, so playback has to follow `opened` as well – otherwise a hidden autoplay video
  // starts on its own and keeps playing after the lightbox is dismissed.
  const playing = active && ctx.opened;

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (!playing) {
      video.pause();
      return;
    }

    // All slides are mounted up front, so the `autoPlay` attribute only ever fires for the
    // slide that happens to be active on mount – playback has to be started explicitly
    // when an already mounted video becomes the current slide.
    if (slide.autoPlay) {
      video.play().catch(() => {});
    }
  }, [playing, slide.autoPlay]);

  return (
    /* eslint-disable jsx-a11y/media-has-caption */
    <video
      ref={videoRef}
      {...ctx.getStyles('slideVideo', stylesApiProps)}
      src={slide.src}
      poster={slide.poster}
      aria-label={slide.label}
      autoPlay={playing && slide.autoPlay}
      data-active={active || undefined}
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
