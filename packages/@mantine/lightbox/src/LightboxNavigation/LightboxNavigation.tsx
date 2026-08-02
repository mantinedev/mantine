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
      width="36"
      height="36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="36"
      height="36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
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
  const canPrev = ctx.embla ? ctx.embla.canScrollPrev() : ctx.loop || ctx.currentIndex > 0;
  const canNext = ctx.embla
    ? ctx.embla.canScrollNext()
    : ctx.loop || ctx.currentIndex < ctx.slides.length - 1;

  return (
    <Box {...ctx.getStyles('navigation', { className, style, classNames, styles })} {...others}>
      <UnstyledButton
        {...ctx.getStyles('navigationButton')}
        aria-label="Previous slide"
        aria-disabled={!canPrev || undefined}
        data-inactive={!canPrev || undefined}
        mod="reduce-motion"
        tabIndex={canPrev ? 0 : -1}
        onClick={ctx.prev}
      >
        <ChevronLeft />
      </UnstyledButton>

      <UnstyledButton
        {...ctx.getStyles('navigationButton')}
        aria-label="Next slide"
        aria-disabled={!canNext || undefined}
        data-inactive={!canNext || undefined}
        mod="reduce-motion"
        tabIndex={canNext ? 0 : -1}
        onClick={ctx.next}
      >
        <ChevronRight />
      </UnstyledButton>
    </Box>
  );
});

LightboxNavigation.classes = classes;
LightboxNavigation.displayName = '@mantine/lightbox/LightboxNavigation';
