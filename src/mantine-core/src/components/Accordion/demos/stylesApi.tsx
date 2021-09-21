import React from 'react';
import { PlusIcon } from '@modulz/radix-icons';
import { createStyles } from '@mantine/styles';
import { Accordion, AccordionProps } from '../Accordion';
import { baseDemoItems } from './_base';

const code = `
import { Accordion, AccordionProps, createStyles } from '@mantine/core';
import { PlusIcon } from '@modulz/radix-icons';

const useStyles = createStyles((theme, _params, getRef) => {
  const controlRef = getRef('control');
  const iconRef = getRef('icon');

  return {
    icon: {
      ref: iconRef,
    },

    control: {
      ref: controlRef,
      border: 0,
      opacity: 0.6,

      '&:hover': {
        backgroundColor: 'transparent',
        opacity: 1,
      },
    },

    item: {
      borderBottom: 0,
      overflow: 'hidden',
      transition: \`box-shadow 150ms \${theme.transitionTimingFunction}\`,
      border: '1px solid transparent',
      borderRadius: theme.radius.sm,
    },

    itemOpened: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3],

      [\`& .\${controlRef}\`]: {
        opacity: 1,
      },

      [\`& .\${iconRef}\`]: {
        transform: 'rotate(45deg)',
      },
    },

    content: {
      paddingLeft: 0,
    },
  };
});

function StyledAccordion(props: AccordionProps) {
  const { classes } = useStyles();
  return <Accordion classNames={classes} icon={<PlusIcon />} {...props} />;
}

function Demo() {
  return (
    <StyledAccordion>
      {/* <Accordion.Item /> components */}
    </StyledAccordion>
  );
}
`;

const useStyles = createStyles((theme, _params, getRef) => {
  const controlRef = getRef('control');
  const iconRef = getRef('icon');

  return {
    icon: {
      ref: iconRef,
    },

    control: {
      ref: controlRef,
      border: 0,
      opacity: 0.6,

      '&:hover': {
        backgroundColor: 'transparent',
        opacity: 1,
      },
    },

    item: {
      borderBottom: 0,
      overflow: 'hidden',
      transition: `box-shadow 150ms ${theme.transitionTimingFunction}`,
      border: '1px solid transparent',
      borderRadius: theme.radius.sm,
    },

    itemOpened: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3],

      [`& .${controlRef}`]: {
        opacity: 1,
      },

      [`& .${iconRef}`]: {
        transform: 'rotate(45deg)',
      },
    },

    content: {
      paddingLeft: 0,
    },
  };
});

export function StyledAccordion(props: AccordionProps) {
  const { classes } = useStyles();
  return <Accordion classNames={classes} icon={<PlusIcon />} {...props} />;
}

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <StyledAccordion>{baseDemoItems}</StyledAccordion>
    </div>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
