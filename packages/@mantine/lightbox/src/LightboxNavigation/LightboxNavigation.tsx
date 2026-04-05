import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  UnstyledButton,
  useProps,
} from '@mantine/core';
import { useLightboxContext } from '../lightbox.context';
import classes from '../Lightbox.module.css';

export type LightboxNavigationStylesNames = 'navigation' | 'navigationButton';

export interface LightboxNavigationProps
  extends BoxProps, CompoundStylesApiProps<LightboxNavigationFactory>, ElementProps<'div'> {}

export type LightboxNavigationFactory = Factory<{
  props: LightboxNavigationProps;
  ref: HTMLDivElement;
  stylesNames: LightboxNavigationStylesNames;
  compound: true;
}>;

function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
    </svg>
  );
}

export const LightboxNavigation = factory<LightboxNavigationFactory>((props) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    'LightboxNavigation',
    null,
    props
  );

  const ctx = useLightboxContext();
  const canPrev = ctx.loop || ctx.currentIndex > 0;
  const canNext = ctx.loop || ctx.currentIndex < ctx.slides.length - 1;

  return (
    <Box {...ctx.getStyles('navigation', { className, style, classNames, styles })} {...others}>
      <UnstyledButton
        {...ctx.getStyles('navigationButton')}
        aria-label="Previous slide"
        data-inactive={!canPrev || undefined}
        tabIndex={canPrev ? 0 : -1}
        onClick={() => ctx.embla?.scrollPrev()}
      >
        <ChevronLeft />
      </UnstyledButton>

      <UnstyledButton
        {...ctx.getStyles('navigationButton')}
        aria-label="Next slide"
        data-inactive={!canNext || undefined}
        tabIndex={canNext ? 0 : -1}
        onClick={() => ctx.embla?.scrollNext()}
      >
        <ChevronRight />
      </UnstyledButton>
    </Box>
  );
});

LightboxNavigation.classes = classes;
LightboxNavigation.displayName = '@mantine/lightbox/LightboxNavigation';
