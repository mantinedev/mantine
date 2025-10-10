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

export type SpotlightFooterStylesNames = 'footer';

export interface SpotlightFooterProps
  extends BoxProps,
    CompoundStylesApiProps<SpotlightFooterFactory>,
    ElementProps<'div'> {}

export type SpotlightFooterFactory = Factory<{
  props: SpotlightFooterProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightFooterStylesNames;
  compound: true;
}>;

export const SpotlightFooter = factory<SpotlightFooterFactory>((props) => {
  const { className, style, classNames, styles, ...others } = useProps(
    'SpotlightFooter',
    null,
    props
  );
  const ctx = useSpotlightContext();
  return <Box {...ctx.getStyles('footer', { className, classNames, style, styles })} {...others} />;
});

SpotlightFooter.classes = classes;
SpotlightFooter.displayName = '@mantine/spotlight/SpotlightFooter';
