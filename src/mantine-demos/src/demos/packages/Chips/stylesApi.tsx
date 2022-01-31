import React from 'react';
import { Chips, Chip, createStyles } from '@mantine/core';

const code = `
import { createStyles, Chip, Chips } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const iconWrapper = getRef('iconWrapper');

  return {
    iconWrapper: {
      ref: iconWrapper,
    },

    checked: {
      backgroundColor: \`\${theme.colors.blue[6]} !important\`,
      color: theme.white,

      [\`& .\${iconWrapper}\`]: {
        color: theme.white,
      },
    },
  };
});

function Demo() {
  const { classes } = useStyles();

  return (
    <Chips position="center" multiple classNames={classes} defaultValue={['react']}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="vue">Vue</Chip>
      <Chip value="svelte">Svelte</Chip>
    </Chips>
  );
}
`;

const useStyles = createStyles((theme, _params, getRef) => {
  const iconWrapper = getRef('iconWrapper');

  return {
    iconWrapper: {
      ref: iconWrapper,
    },

    checked: {
      backgroundColor: `${theme.colors.blue[6]} !important`,
      color: theme.white,

      [`& .${iconWrapper}`]: {
        color: theme.white,
      },
    },
  };
});

function Demo() {
  const { classes } = useStyles();

  return (
    <Chips position="center" multiple classNames={classes} defaultValue={['react']}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="vue">Vue</Chip>
      <Chip value="svelte">Svelte</Chip>
    </Chips>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
