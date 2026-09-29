import { Button, Group, ImageCropper, Stack, Text, useImageCropper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, ImageCropper, Stack, Text, useImageCropper } from '@mantine/core';

const image = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png';

function Demo() {
  const controller = useImageCropper({ aspectRatio: 4 / 3, maxZoom: 4 });

  return (
    <Stack maw={420} mx="auto">
      <ImageCropper src={image} crossOrigin="anonymous" controller={controller} />

      <Group gap="xs" justify="center">
        <Button variant="default" size="xs" onClick={() => controller.zoomBy(-0.5)}>
          Zoom out
        </Button>
        <Button variant="default" size="xs" onClick={() => controller.zoomBy(0.5)}>
          Zoom in
        </Button>
        <Button variant="default" size="xs" onClick={() => controller.rotateBy(90)}>
          Rotate 90°
        </Button>
        <Button variant="default" size="xs" onClick={controller.flipHorizontal}>
          Flip
        </Button>
        <Button variant="default" size="xs" onClick={controller.reset}>
          Reset
        </Button>
      </Group>

      <Text size="sm" c="dimmed" ta="center">
        zoom: {controller.zoom.toFixed(1)}×, rotation: {controller.rotation}°, flipped:{' '}
        {String(controller.flip.horizontal)}
      </Text>
    </Stack>
  );
}
`;

const image = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png';

function Demo() {
  const controller = useImageCropper({ aspectRatio: 4 / 3, maxZoom: 4 });

  return (
    <Stack maw={420} mx="auto">
      <ImageCropper src={image} crossOrigin="anonymous" controller={controller} />

      <Group gap="xs" justify="center">
        <Button variant="default" size="xs" onClick={() => controller.zoomBy(-0.5)}>
          Zoom out
        </Button>
        <Button variant="default" size="xs" onClick={() => controller.zoomBy(0.5)}>
          Zoom in
        </Button>
        <Button variant="default" size="xs" onClick={() => controller.rotateBy(90)}>
          Rotate 90°
        </Button>
        <Button variant="default" size="xs" onClick={controller.flipHorizontal}>
          Flip
        </Button>
        <Button variant="default" size="xs" onClick={controller.reset}>
          Reset
        </Button>
      </Group>

      <Text size="sm" c="dimmed" ta="center">
        zoom: {controller.zoom.toFixed(1)}×, rotation: {controller.rotation}°, flipped:{' '}
        {String(controller.flip.horizontal)}
      </Text>
    </Stack>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
