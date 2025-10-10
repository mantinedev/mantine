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

export const SpotlightEmpty = factory<SpotlightEmptyFactory>((props) => {
  const { className, style, classNames, styles, ...others } = useProps(
    'SpotlightEmpty',
    null,
    props
  );

  const ctx = useSpotlightContext();

  return <Box {...ctx.getStyles('empty', { classNames, styles, className, style })} {...others} />;
});

SpotlightEmpty.classes = classes;
SpotlightEmpty.displayName = '@mantine/spotlight/SpotlightEmpty';
