import React from 'react';
import { Box, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

function Slide({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.blue[theme.colorScheme === 'dark' ? 8 : 6],
        color: theme.white,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: rem(50),
        fontWeight: 'bold',
      })}
    >
      {children}
    </Box>
  );
}

export function Slides({ count }: { count: number }) {
  const slides = Array(count)
    .fill(0)
    .map((_, index) => (
      <Carousel.Slide key={index}>
        <Slide>{index + 1}</Slide>
      </Carousel.Slide>
    ));
  return <>{slides}</>;
}
