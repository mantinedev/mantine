import React, { forwardRef } from 'react';
import { useMantineDefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Text, SharedTextProps } from '../Text/Text';
import useStyles from './Anchor.styles';

export interface AnchorProps extends SharedTextProps {
  children?: React.ReactNode;
}

const defaultProps: Partial<AnchorProps> = {};

export const _Anchor = forwardRef<HTMLAnchorElement, AnchorProps & { component: any }>(
  (props, ref) => {
    const { component, className, classNames, styles, ...others } = useMantineDefaultProps(
      'Anchor',
      defaultProps as AnchorProps & { component: any },
      props
    );
    const { classes, cx } = useStyles(null, { name: 'Anchor', classNames, styles });
    const buttonProps = component === 'button' ? { type: 'button' } : null;

    return (
      <Text
        component={component || 'a'}
        variant="link"
        ref={ref}
        className={cx(classes.root, className)}
        {...buttonProps}
        {...others}
      />
    );
  }
);

_Anchor.displayName = '@mantine/core/Anchor';

export const Anchor = createPolymorphicComponent<'a', AnchorProps>(_Anchor);
