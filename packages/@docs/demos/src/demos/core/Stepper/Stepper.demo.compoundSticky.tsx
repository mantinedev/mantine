import { useState } from 'react';
import { Box, ScrollArea, Stack, Stepper, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Box, ScrollArea, Stack, Stepper, Text } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper.Root active={active} onStepClick={setActive}>
      <Box pos="sticky" top={0}>
        <Stepper.Steps>
          <Stepper.Step label="Step 1" />
          <Stepper.Step label="Step 2" />
          <Stepper.Step label="Step 3" />
        </Stepper.Steps>
      </Box>

      <ScrollArea h={100}>
        <Stepper.Content step={0}>
          <Stack p="md">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Text>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Text>
            <Text>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Stack>
        </Stepper.Content>
        <Stepper.Content step={1}>
          <Stack p="md">
            <Text>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </Text>
            <Text>
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </Text>
            <Text>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
            </Text>
            <Text>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </Text>
          </Stack>
        </Stepper.Content>
        <Stepper.Content step={2}>
          <Stack p="md">
            <Text>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
            </Text>
            <Text>
              Et harum quidem rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum.
            </Text>
            <Text>
              Rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </Text>
            <Text>
              Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </Text>
          </Stack>
        </Stepper.Content>
      </ScrollArea>
    </Stepper.Root>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper.Root active={active} onStepClick={setActive}>
      <Box pos="sticky" top={0}>
        <Stepper.Steps>
          <Stepper.Step label="Step 1" />
          <Stepper.Step label="Step 2" />
          <Stepper.Step label="Step 3" />
        </Stepper.Steps>
      </Box>

      <ScrollArea h={100}>
        <Stepper.Content step={0}>
          <Stack p="md">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Text>
            <Text>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
            <Text>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
          </Stack>
        </Stepper.Content>
        <Stepper.Content step={1}>
          <Stack p="md">
            <Text>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </Text>
            <Text>
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </Text>
            <Text>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores.
            </Text>
            <Text>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit.
            </Text>
          </Stack>
        </Stepper.Content>
        <Stepper.Content step={2}>
          <Stack p="md">
            <Text>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti.
            </Text>
            <Text>
              Et harum quidem rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
              et molestiae non recusandae itaque earum.
            </Text>
            <Text>
              Rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
              consequatur aut perferendis doloribus asperiores repellat.
            </Text>
            <Text>
              Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem.
            </Text>
          </Stack>
        </Stepper.Content>
      </ScrollArea>
    </Stepper.Root>
  );
}

export const compoundSticky: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
