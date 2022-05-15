import React from 'react';
import { Chip, createStyles } from '@mantine/core';

const code = `
import { createStyles, Chip } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
  iconWrapper: {
    ref: getRef('iconWrapper'),
  },

  checked: {
    backgroundColor: \`\${theme.colors.blue[6]} !important\`,
    color: theme.white,

    [\`& .\${getRef('iconWrapper')}\`]: {
      color: theme.white,
    },
  },
}));


function Demo() {
  const { classes } = useStyles();

  return (
    <Chip.Group position="center" multiple defaultValue={['react']}>
      <Chip classNames={classes} value="react">React</Chip>
      <Chip classNames={classes} value="ng">Angular</Chip>
      <Chip classNames={classes} value="vue">Vue</Chip>
      <Chip classNames={classes} value="svelte">Svelte</Chip>
    </Chip.Group>
  );
}
`;

const useStyles = createStyles((theme, _params, getRef) => ({
  iconWrapper: {
    ref: getRef('iconWrapper'),
  },

  checked: {
    backgroundColor: `${theme.colors.blue[6]} !important`,
    color: theme.white,

    [`& .${getRef('iconWrapper')}`]: {
      color: theme.white,
    },
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <Chip.Group position="center" multiple defaultValue={['react']}>
      <Chip classNames={classes} value="react">
        React
      </Chip>
      <Chip classNames={classes} value="ng">
        Angular
      </Chip>
      <Chip classNames={classes} value="vue">
        Vue
      </Chip>
      <Chip classNames={classes} value="svelte">
        Svelte
      </Chip>
    </Chip.Group>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
