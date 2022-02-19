import React, { forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef, useMantineDefaultProps } from '@mantine/styles';
import { Text, SharedTextProps } from '../Text/Text';
import useStyles from './Anchor.styles';

export type AnchorProps<C> = C extends React.ElementType
  ? PolymorphicComponentProps<C, SharedTextProps>
  : never;

type AnchorComponent = (<C = 'a'>(props: AnchorProps<C>) => React.ReactElement) & {
  displayName?: string;
};

const defaultProps: Partial<AnchorProps<any>> = {};

export const Anchor: AnchorComponent = forwardRef(
  <C extends React.ElementType = 'a'>(props: AnchorProps<C>, ref: PolymorphicRef<C>) => {
    const { component, className, classNames, styles, ...others } = useMantineDefaultProps(
      'Anchor',
      defaultProps,
      props
    );
    const { classes, cx } = useStyles(null, { name: 'Anchor', classNames, styles });
    const buttonProps = component === 'button' ? { type: 'button' } : null;

    return (
      <Text
        component={(component || 'a') as any}
        variant="link"
        ref={ref}
        className={cx(classes.root, className)}
        {...buttonProps}
        {...others}
      />
    );
  }
);

Anchor.displayName = '@mantine/core/Anchor';
