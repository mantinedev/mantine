import React from 'react';
import { Text, SharedTextProps } from '../Text/Text';

interface _AnchorProps<C extends React.ElementType, R extends HTMLElement> extends SharedTextProps {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;
}

export type AnchorProps<
  C extends React.ElementType = 'a',
  R extends HTMLElement = HTMLAnchorElement
> = _AnchorProps<C, R> & Omit<React.ComponentPropsWithoutRef<C>, keyof SharedTextProps>;

export function Anchor<
  C extends React.ElementType = 'a',
  R extends HTMLElement = HTMLAnchorElement
>({ component, ...others }: AnchorProps<C, R>) {
  return <Text component={(component || 'a') as any} variant="link" {...others} />;
}

Anchor.displayName = '@mantine/core/Anchor';
