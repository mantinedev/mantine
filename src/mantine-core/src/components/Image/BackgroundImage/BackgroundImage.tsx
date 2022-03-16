import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  useMantineDefaultProps,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
import { Box } from '../../Box';

interface _BackgroundImageProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  src: string;
  radius?: MantineNumberSize;
}

export type BackgroundImageProps<C> = C extends React.ElementType
  ? PolymorphicComponentProps<C, _BackgroundImageProps>
  : never;

type BackgroundImageComponent = (<C = 'div'>(
  props: BackgroundImageProps<C>
) => React.ReactElement) & {
  displayName?: string;
};

const defaultProps: Partial<BackgroundImageProps<any>> = {
  radius: 0,
};

export const BackgroundImage: BackgroundImageComponent = forwardRef(
  <C extends React.ElementType = 'div'>(props: BackgroundImageProps<C>, ref: PolymorphicRef<C>) => {
    const { src, radius, sx, ...others } = useMantineDefaultProps(
      'BackgroundImage',
      defaultProps,
      props
    );

    return (
      <Box
        {...others}
        ref={ref}
        sx={[
          (theme) => ({
            ...theme.fn.focusStyles(),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'block',
            width: '100%',
            border: 0,
            textDecoration: 'none',
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            backgroundImage: `url(${src})`,
            borderRadius: theme.fn.radius(radius),
          }),
          sx,
        ]}
      />
    );
  }
);

BackgroundImage.displayName = '@mantine/core/BackgroundImage';
