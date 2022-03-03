import React, { forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '@mantine/styles';
import { Text, SharedTextProps } from '../Text/Text';
import useStyles from './Anchor.styles';

export type AnchorProps<C> = PolymorphicComponentProps<C, SharedTextProps>;

type AnchorComponent = (<C = 'a'>(props: AnchorProps<C>) => React.ReactElement) & {
  displayName?: string;
};

export const Anchor: AnchorComponent = forwardRef(
  <C extends React.ElementType = 'a'>(
    { component, className, classNames, styles, ...others }: AnchorProps<C>,
    ref: PolymorphicRef<C>
  ) => {
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
