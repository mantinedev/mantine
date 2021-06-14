import React from 'react';
import { Button } from '@mantine/core';
import { TwitterIcon } from './TwitterIcon';

export function TwitterButton({ style, ...others }: React.ComponentProps<'button'>) {
  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/mantinedev"
      leftIcon={<TwitterIcon style={{ width: 14, marginRight: 5 }} />}
      style={{
        ...style,
        backgroundColor: '#00acee',
        textShadow: 'unset',
        border: 0,
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
      }}
      {...others}
    >
      Follow on Twitter
    </Button>
  );
}
