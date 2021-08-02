import React from 'react';
import { ComponentPassThrough } from '../../types';
import { Text, TextProps } from '../Text/Text';

export interface AnchorProps extends TextProps {}

export function Anchor<T extends React.ElementType = 'a', U = HTMLAnchorElement>({
  component = 'a',
  ...others
}: ComponentPassThrough<T, AnchorProps> & { elementRef?: React.ForwardedRef<U> }) {
  return <Text component={component} variant="link" {...others} />;
}

Anchor.displayName = '@mantine/core/Anchor';
