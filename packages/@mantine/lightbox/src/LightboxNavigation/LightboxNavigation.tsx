import { useEffect, useState } from 'react';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  UnstyledButton,
  useDirection,
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
  const stylesApiProps = { classNames, styles };
  const { dir } = useDirection();

  // Embla is direction-aware, so "previous" is the leading edge of the reading direction –
  // the chevrons have to follow it rather than always pointing left/right.
  const PrevIcon = dir === 'rtl' ? ChevronRight : ChevronLeft;
  const NextIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  const fallbackCanPrev = ctx.loop ? ctx.slides.length > 1 : ctx.currentIndex > 0;
  const fallbackCanNext = ctx.loop
    ? ctx.slides.length > 1
    : ctx.currentIndex < ctx.slides.length - 1;

  const [scrollState, setScrollState] = useState<{ canPrev: boolean; canNext: boolean } | null>(
    null
  );

  const { embla } = ctx;

  useEffect(() => {
    if (!embla) {
      setScrollState(null);
      return undefined;
    }

    const update = () =>
      setScrollState({ canPrev: embla.canScrollPrev(), canNext: embla.canScrollNext() });

    update();
    embla.on('select', update);
    embla.on('reInit', update);
    embla.on('settle', update);

    return () => {
      embla.off('select', update);
      embla.off('reInit', update);
      embla.off('settle', update);
    };
  }, [embla]);

  const canPrev = scrollState ? scrollState.canPrev : fallbackCanPrev;
  const canNext = scrollState ? scrollState.canNext : fallbackCanNext;

  return (
    <Box {...ctx.getStyles('navigation', { className, style, classNames, styles })} {...others}>
      <UnstyledButton
        {...ctx.getStyles('navigationButton', stylesApiProps)}
        aria-label={ctx.labels.previousSlideLabel}
        aria-disabled={!canPrev || undefined}
        data-inactive={!canPrev || undefined}
        mod="reduce-motion"
        tabIndex={canPrev ? 0 : -1}
        onClick={ctx.prev}
      >
        <PrevIcon />
      </UnstyledButton>

      <UnstyledButton
        {...ctx.getStyles('navigationButton', stylesApiProps)}
        aria-label={ctx.labels.nextSlideLabel}
        aria-disabled={!canNext || undefined}
        data-inactive={!canNext || undefined}
        mod="reduce-motion"
        tabIndex={canNext ? 0 : -1}
        onClick={ctx.next}
      >
        <NextIcon />
      </UnstyledButton>
    </Box>
  );
});

LightboxNavigation.classes = classes;
LightboxNavigation.displayName = '@mantine/lightbox/LightboxNavigation';
