import React from 'react';
import { TwitterLogoIcon } from '@modulz/radix-icons';
import { Button } from '../Button';
import { Group } from '../../Group/Group';

const code = `
<Button
  component="a"
  target="_blank"
  rel="noopener noreferrer"
  href="https://twitter.com/mantinedev"
  leftIcon={<TwitterLogoIcon width={18} height={18} />}
  styles={{
    root: {
      backgroundColor: '#00acee',
      border: 0,
      height: 42,
      paddingLeft: 20,
      paddingRight: 20,
    },

    label: {
      lineHeight: '42px',
    },

    leftIcon: {
      marginRight: 15,
    },
  }}
>
  Follow on Twitter
</Button>
`;

function Demo() {
  return (
    <Group position="center">
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/mantinedev"
        leftIcon={<TwitterLogoIcon width={18} height={18} />}
        styles={{
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 42,
            paddingLeft: 20,
            paddingRight: 20,
          },

          label: {
            lineHeight: '42px',
          },

          leftIcon: {
            marginRight: 15,
          },
        }}
      >
        Follow on Twitter
      </Button>
    </Group>
  );
}

export const customize: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
