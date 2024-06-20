import { BackgroundImage, BackgroundImageProps, Box, Center, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: BackgroundImageProps) {
  return (
    <Box maw={300} mx="auto">
      <BackgroundImage
        {...props}
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
      >
        <Center p="md">
          <Text c="white">
            BackgroundImage component can be used to add any content on image. It is useful for hero
            headers and other similar sections
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
  );
}

const code = `
import { BackgroundImage, Center, Text, Box } from '@mantine/core';


function Demo() {
  return (
    <Box maw={300} mx="auto">
      <BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
        {{props}}
      >
        <Center p="md">
          <Text c="white">
            BackgroundImage component can be used to add any content on image. It is useful for hero
            headers and other similar sections
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
  );
}
`;

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [{ prop: 'radius', type: 'size', initialValue: 'sm', libraryValue: null }],
};
