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
import classes from '../Lightbox.module.css';

export type LightboxCaptionStylesNames = 'caption';

export interface LightboxCaptionProps
  extends BoxProps, CompoundStylesApiProps<LightboxCaptionFactory>, ElementProps<'div'> {
  /** Custom caption content, overrides slide caption */
  children?: React.ReactNode;
}

export type LightboxCaptionFactory = Factory<{
  props: LightboxCaptionProps;
  ref: HTMLDivElement;
  stylesNames: LightboxCaptionStylesNames;
  compound: true;
}>;

export const LightboxCaption = factory<LightboxCaptionFactory>((props) => {
  const { classNames, className, style, styles, vars, children, ...others } = useProps(
    'LightboxCaption',
    null,
    props
  );

  const ctx = useLightboxContext();
  const currentSlide = ctx.slides[ctx.currentIndex];
  const caption = children ?? currentSlide?.caption;

  if (!caption) {
    return null;
  }

  return (
    <Box
      {...ctx.getStyles('caption', { className, style, classNames, styles })}
      mod="reduce-motion"
      {...others}
    >
      {caption}
    </Box>
  );
});

LightboxCaption.classes = classes;
LightboxCaption.displayName = '@mantine/lightbox/LightboxCaption';
