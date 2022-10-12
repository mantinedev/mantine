import React from 'react';
import { MantineProvider } from '@mantine/styles';
import { ThemeIcon } from './ThemeIcon';
import { Group } from '../Group';
import { Box } from '../Box';
import { Text } from '../Text';
import { Center } from '../Center';

export default { title: 'ThemeIcon' };

export function WithHexColor() {
  return <ThemeIcon color="#000">$</ThemeIcon>;
}

export function WithoutColor() {
  return <ThemeIcon>$</ThemeIcon>;
}

export function Gradient() {
  return (
    <div style={{ padding: '40px' }}>
      <Group>
        <Box>
          <Text>MantineProvider</Text>
          <MantineProvider
            theme={{
              defaultGradient: {
                from: 'red.2',
                to: 'orange.8',
                deg: 45,
              },
            }}
          >
            <Center>
              <ThemeIcon variant="gradient" radius="md">
                $
              </ThemeIcon>
            </Center>
          </MantineProvider>
        </Box>

        <Box>
          <Text>Default</Text>
          <Center>
            <ThemeIcon variant="gradient" radius="md">
              $
            </ThemeIcon>
          </Center>
        </Box>

        <Box>
          <Text>Specific</Text>
          <Center>
            <ThemeIcon variant="gradient" gradient={{ from: 'orange', to: 'red' }} radius="md">
              $
            </ThemeIcon>
          </Center>
        </Box>
      </Group>
    </div>
  );
}
