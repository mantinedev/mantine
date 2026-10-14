import { Box, Spoiler, SpoilerProps, Text } from '@mantine/core';

const content = (
  <div>
    <Box
      component="img"
      h={150}
      ml={20}
      mb={0}
      mt={5}
      maw="100%"
      style={{ float: 'right' }}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
      alt="Desert dunes at sunset"
    />
    <Text>
      Deserts cover about one third of the land surface of the Earth. They are defined by low
      rainfall rather than by heat: some of the largest deserts, such as Antarctica and the Gobi,
      are cold for most of the year. Sand dunes are the most familiar desert landscape, yet they
      cover only a small part of desert areas. Most deserts are rocky plains, gravel fields and dry
      mountain ranges. Plants and animals that live there have adapted to save water: cacti store it
      in their thick stems, and many animals are active only at night when the air is cooler.
    </Text>
  </div>
);

export function Wrapper(props: Partial<SpoilerProps>) {
  return (
    <Box maw={520} mx="auto">
      <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" {...props}>
        {content}
      </Spoiler>
    </Box>
  );
}
