import { createStyles } from '@mantine/styles';

import { IconSearch } from '@tabler/icons';
import React from 'react';
import { ActionIcon } from '../ActionIcon';
import { TextInput } from '../TextInput';
import { Group } from '../Group';
import { Box } from '../Box';
import { Headroom } from './Headroom';

export default { title: 'Headroom' };

const useStyles = createStyles((theme) => ({
  layout: { width: '100%', height: 1000, position: 'fixed', top: 0, left: 0, zIndex: 99 },
  header: { padding: theme.spacing.sm },
}));

export function Usage() {
  const {
    classes: { header, layout },
  } = useStyles();

  return (
    <Box className={layout}>
      <Headroom classNames={{ header }} height={50}>
        <Group position="center">
          <TextInput
            radius={900}
            placeholder="Hide me until you need me..."
            style={{ width: 300 }}
            rightSection={
              <ActionIcon radius={99} color="blue" variant="light">
                <IconSearch size={14} />
              </ActionIcon>
            }
          />
        </Group>
      </Headroom>
    </Box>
  );
}
