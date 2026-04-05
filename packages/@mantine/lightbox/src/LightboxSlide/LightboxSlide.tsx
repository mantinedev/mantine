import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useLightboxContext } from '../lightbox.context';
import type { LightboxSlideData } from '../lightbox.types';
import { ImageSlide } from './ImageSlide';
import { VideoSlide } from './VideoSlide';
import classes from '../Lightbox.module.css';

export type LightboxSlideStylesNames = 'slide' | 'slideImage' | 'slideVideo';

export interface LightboxSlideProps
  extends BoxProps, CompoundStylesApiProps<LightboxSlideFactory>, ElementProps<'div'> {
  slide: LightboxSlideData;
  index: number;
  getImageProps?: () => Record<string, any>;
}

export type LightboxSlideFactory = Factory<{
  props: LightboxSlideProps;
  ref: HTMLDivElement;
  stylesNames: LightboxSlideStylesNames;
  compound: true;
}>;

export const LightboxSlide = factory<LightboxSlideFactory>((props) => {
  const { classNames, className, style, styles, vars, slide, index, getImageProps, ...others } =
    useProps('LightboxSlide', null, props);

  const ctx = useLightboxContext();
  const active = ctx.currentIndex === index;

  const renderContent = () => {
    if (slide.type === 'video') {
      return <VideoSlide slide={slide} active={active} />;
    }

    if (slide.type === 'custom') {
      return slide.render({ active });
    }

    return <ImageSlide slide={slide} active={active} getImageProps={getImageProps} />;
  };

  return (
    <Box
      {...ctx.getStyles('slide', { className, style, classNames, styles })}
      {...others}
      role="group"
      aria-roledescription="slide"
      aria-label={`Slide ${index + 1} of ${ctx.slides.length}`}
    >
      {renderContent()}
    </Box>
  );
});

LightboxSlide.classes = classes;
LightboxSlide.displayName = '@mantine/lightbox/LightboxSlide';
