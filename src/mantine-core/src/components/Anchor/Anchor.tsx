import React from 'react';
import cx from 'clsx';
import { polymorphicFactory, useProps, PolymorphicFactory } from '../../core';
import { Text, TextProps, TextCssVariables, TextStylesNames, TextVariant } from '../Text';
import classes from './Anchor.module.css';

export type AnchorStylesNames = TextStylesNames;
export type AnchorVariant = TextVariant;
export type AnchorCssVariables = TextCssVariables;

export interface AnchorProps extends Omit<TextProps, 'span'> {
  /** Determines in which cases link should have `text-decoration: underline` styles, `hover` by default */
  underline?: 'always' | 'hover' | 'never';
}

export type AnchorFactory = PolymorphicFactory<{
  props: AnchorProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
  stylesNames: AnchorStylesNames;
  vars: AnchorCssVariables;
  variant: AnchorVariant;
}>;

const defaultProps: Partial<AnchorProps> = {
  underline: 'hover',
};

export const Anchor = polymorphicFactory<AnchorFactory>((props, ref) => {
  const { underline, className, unstyled, ...others } = useProps('Anchor', defaultProps, props);
  return (
    <Text
      component="a"
      ref={ref}
      className={cx({ [classes.root]: !unstyled }, className)}
      {...others}
      mod={{ underline }}
      __staticSelector="Anchor"
      unstyled={unstyled}
    />
  );
});

Anchor.classes = classes;
Anchor.displayName = '@mantine/core/Anchor';
