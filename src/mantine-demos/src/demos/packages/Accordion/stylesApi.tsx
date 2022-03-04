import React from 'react';
import { PlusIcon } from '@modulz/radix-icons';
import { Accordion, AccordionProps, createStyles } from '@mantine/core';
import { baseDemoItems } from './_base';

const code = `
import { Accordion, AccordionProps, createStyles } from '@mantine/core';
import { PlusIcon } from '@modulz/radix-icons';

const useStyles = createStyles((theme, _params, getRef) => {
  const controlRef = getRef('control');
  const iconRef = getRef('icon');
  const itemTitleRef = getRef('itemTitle');

  return {
    icon: { ref: iconRef },
    itemTitle: { ref: itemTitleRef },

    control: {
      ref: controlRef,
      border: 0,
      opacity: 0.6,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

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

      [\`& > .\${itemTitleRef} .\${iconRef}\`]: {
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
    <StyledAccordion initialItem={0}>
      {/* <Accordion.Item /> components */}
    </StyledAccordion>
  );
}
`;

const useStyles = createStyles((theme, _params, getRef) => {
  const controlRef = getRef('control');
  const iconRef = getRef('icon');
  const itemTitleRef = getRef('itemTitle');

  return {
    icon: { ref: iconRef },
    itemTitle: { ref: itemTitleRef },

    control: {
      ref: controlRef,
      border: 0,
      opacity: 0.6,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

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
      [`& > .${itemTitleRef} .${iconRef}`]: {
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
    <div style={{ maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
      <StyledAccordion initialItem={0}>{baseDemoItems}</StyledAccordion>
    </div>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
