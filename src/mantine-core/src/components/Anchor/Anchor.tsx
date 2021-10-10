import React, { forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '@mantine/styles';
import { Text, SharedTextProps } from '../Text/Text';

export type AnchorProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedTextProps
>;

type AnchorComponent = <C extends React.ElementType = 'a'>(
  props: AnchorProps<C>
) => React.ReactElement;

export const Anchor: AnchorComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'a'>(
    { component, ...others }: AnchorProps<C>,
    ref: PolymorphicRef<C>
  ) => <Text component={(component || 'a') as any} variant="link" ref={ref} {...others} />
);

Anchor.displayName = '@mantine/core/Anchor';
