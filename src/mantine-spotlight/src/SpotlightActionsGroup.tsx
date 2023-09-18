import React from 'react';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from '@mantine/core';
import classes from './Spotlight.module.css';
import { useSpotlightContext } from './Spotlight.context';

export type SpotlightActionsGroupStylesNames = 'actionsGroup';

export interface SpotlightActionsGroupProps
  extends BoxProps,
    CompoundStylesApiProps<SpotlightActionsGroupFactory>,
    ElementProps<'div'> {
  /** `Spotlight.Action` components */
  children?: React.ReactNode;

  /** Group label */
  label?: React.ReactNode;
}

export type SpotlightActionsGroupFactory = Factory<{
  props: SpotlightActionsGroupProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightActionsGroupStylesNames;
  compound: true;
}>;

const defaultProps: Partial<SpotlightActionsGroupProps> = {};

export const SpotlightActionsGroup = factory<SpotlightActionsGroupFactory>((props, ref) => {
  const { className, style, styles, classNames, label, children, ...others } = useProps(
    'SpotlightActionsGroup',
    defaultProps,
    props
  );
  const ctx = useSpotlightContext();

  return (
    <Box
      {...ctx.getStyles('actionsGroup', { className, style, classNames, styles })}
      ref={ref}
      {...others}
      __vars={{ '--spotlight-label': `'${label}'` }}
    >
      {children}
    </Box>
  );
});

SpotlightActionsGroup.classes = classes;
SpotlightActionsGroup.displayName = '@mantine/core/SpotlightActionsGroup';
