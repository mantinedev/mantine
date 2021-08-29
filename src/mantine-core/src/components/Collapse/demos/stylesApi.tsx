import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '../../Button/Button';
import { theming } from '../../../theme';
import { Collapse, CollapseProps } from '../Collapse';

const code = `
const useStyles = createUseStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
      marginTop: theme.spacing.md,
    },
    content: {
      padding: theme.spacing.md,
    },
  }),
  { theming }
);

function StyledCollapse(props: CollapseProps) {
  const classes = useStyles();
  return <Collapse classNames={classes} {...props} />;
}

function Demo() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: 400 }}>
      <Button onClick={() => setOpen(prev => !prev)}>
        Collapse
      </Button>

      <StyledCollapse in={isOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </StyledCollapse>
    </div>
  );
}
`;

const useStyles = createUseStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
      marginTop: theme.spacing.md,
      borderRadius: theme.radius.md,
    },
    content: {
      padding: theme.spacing.md,
    },
  }),
  { theming }
);

function StyledCollapse(props: CollapseProps) {
  const classes = useStyles();
  return <Collapse classNames={classes} {...props} />;
}

function Demo() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: 400 }}>
      <Button onClick={() => setOpen(prev => !prev)}>
        Collapse
      </Button>

      <StyledCollapse in={isOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </StyledCollapse>
    </div>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
