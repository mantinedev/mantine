import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';
import classes from './Spotlight.module.css';

export type SpotlightEmptyStylesNames = 'empty';

export interface SpotlightEmptyProps
  extends BoxProps,
    CompoundStylesApiProps<SpotlightEmptyFactory>,
    ElementProps<'div'> {}

export type SpotlightEmptyFactory = Factory<{
  props: SpotlightEmptyProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightEmptyStylesNames;
  compound: true;
}>;

const defaultProps: Partial<SpotlightEmptyProps> = {};

export const SpotlightEmpty = factory<SpotlightEmptyFactory>((props, ref) => {
  const { className, style, classNames, styles, ...others } = useProps(
    'SpotlightEmpty',
    defaultProps,
    props
  );

  const ctx = useSpotlightContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('empty', { classNames, styles, className, style })}
      {...others}
    />
  );
});

SpotlightEmpty.classes = classes;
SpotlightEmpty.displayName = '@mantine/spotlight/SpotlightEmpty';
