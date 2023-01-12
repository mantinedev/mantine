import React from 'react';
import { Link } from 'gatsby';
import { Text, Box, Anchor, rem } from '@mantine/core';
import { Prism } from '@mantine/prism';

const code = `
import { createStyles } from '@mantine/core';

const useStyles = createStyles({
  parent: {
    backgroundColor: 'pink',

    '&:hover': {
      backgroundColor: 'orange',
    },
  },

  child: {
    fontSize: '${rem(14)}',
    lineHeight: 1.45,
  },

  active: {
    backgroundColor: 'white',
  },
});

function Demo() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parent}>
      <div className={classes.child}>Child</div>
      <div className={cx(classes.child, classes.active)}>Active child</div>
    </div>
  );
}
`;

export function CreateStylesDemo() {
  return (
    <Box pt="xl">
      <Text mb="sm">
        For more complex styles use{' '}
        <Anchor component={Link} to="/styles/create-styles/">
          createStyles function
        </Anchor>{' '}
        to separate styles from markup:
      </Text>
      <Prism
        language="tsx"
        radius="md"
        noCopy
        styles={(theme) => ({
          code: {
            backgroundColor:
              theme.colorScheme === 'dark' ? `${theme.colors.dark[7]} !important` : undefined,
          },
        })}
      >
        {code}
      </Prism>
    </Box>
  );
}
