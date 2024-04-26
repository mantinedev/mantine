import { Button, Stack } from '@mantine/core';
import { useFullscreen } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const refCode = `
import { useFullscreen } from '@mantine/hooks';
import { Button, Stack } from '@mantine/core';

function RefDemo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <Stack align="center">
      <img
        ref={ref}
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
        alt="For demo"
        width={200}
      />
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </Stack>
  );
}
`;

function RefDemo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <Stack align="center">
      <img
        ref={ref}
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
        alt="For demo"
        width={200}
      />
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </Stack>
  );
}

export const useFullscreenRefDemo: MantineDemo = {
  type: 'code',
  code: refCode,
  component: RefDemo,
};
