import { Carousel } from '@mantine/carousel';
import { Box } from '@mantine/core';

function Slide({ children }: { children: React.ReactNode }) {
  return (
    <Box
      style={{
        backgroundColor: 'var(--mantine-color-blue-filled)',
        color: 'var(--mantine-color-white)',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        fontWeight: 'bold',
      }}
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
