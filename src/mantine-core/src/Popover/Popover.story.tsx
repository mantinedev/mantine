import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput } from '../TextInput/TextInput';
import { Group } from '../Group/Group';
import { Button } from '../Button/Button';
import { Popover } from './Popover';

storiesOf('@mantine/core/Popover', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Popover>
      <TextInput label="Text input" placeholder="text input" style={{ minWidth: 300 }} />
      <Group position="center" style={{ marginTop: 15 }}>
        <Button variant="outline" color="gray">
          Cancel
        </Button>
        <Button>Submit</Button>
      </Group>
    </Popover>
  </div>
));
