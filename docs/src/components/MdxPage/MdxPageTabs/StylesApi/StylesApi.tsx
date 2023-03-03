import React from 'react';
import { Box, Group, rem } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import GatsbyLink from '../../MdxProvider/GatsbyLink/GatsbyLink';
import { StylesApiItem } from './StylesApiItem/StylesApiItem';

interface StylesApiProps {
  components: string[];
}

export function StylesApi({ components }: StylesApiProps) {
  if (!Array.isArray(components)) {
    return null;
  }

  const items = components.map((component) => (
    <StylesApiItem key={component} component={component} />
  ));

  return (
    <>
      {items}
      <Box mt="xl">
        <GatsbyLink to="/styles/styles-api/">
          <Group spacing={4}>
            <span>Learn more about Styles API</span>
            <IconArrowRight size={rem(14)} stroke={1.5} />
          </Group>
        </GatsbyLink>
      </Box>
    </>
  );
}
