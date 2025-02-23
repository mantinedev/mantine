import { AspectRatio, Card, Overlay, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Alert, AspectRatio, Overlay } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9} maw={600} mx="auto" pos="relative">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
        alt="Demo"
      />
      <Overlay center>
        <Card bg="blue">
          <Title>Content Centered</Title>
          The overlay is centered within the container using the 'center' prop.
        </Card>
      </Overlay>
    </AspectRatio>
  );
}
`;

function Demo() {
  return (
    <AspectRatio ratio={16 / 9} maw={600} mx="auto" pos="relative">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
        alt="Demo"
      />
      <Overlay center>
        <Card>
          <Title order={3}>Content Centered</Title>
          Content is centered within the container using the `center` prop.
        </Card>
      </Overlay>
    </AspectRatio>
  );
}

export const center: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
