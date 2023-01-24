import React from 'react';
import { IconFilePlus, IconFolderPlus, IconFileMinus, IconFolderMinus } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Wrapper } from './_wrapper';

const code = `
import {
  IconFilePlus,
  IconFolderPlus,
  IconFileMinus,
  IconFolderMinus,
} from '@tabler/icons-react';
import { TransferList } from '@mantine/core';

function Demo() {
  return (
    <TransferList
      transferIcon={({ reversed }) => (reversed ? <IconFileMinus /> : <IconFilePlus />)}
      transferAllIcon={({ reversed }) => (reversed ? <IconFolderMinus /> : <IconFolderPlus />)}
      {/* ...other props */}
    />
  )
}
`;

function Demo() {
  return (
    <Wrapper
      searchPlaceholder="Search..."
      nothingFound="Nothing here"
      titles={['Frameworks', 'Libraries']}
      breakpoint="sm"
      transferIcon={({ reversed }) => (reversed ? <IconFileMinus /> : <IconFilePlus />)}
      transferAllIcon={({ reversed }) => (reversed ? <IconFolderMinus /> : <IconFolderPlus />)}
    />
  );
}

export const customIcons: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
