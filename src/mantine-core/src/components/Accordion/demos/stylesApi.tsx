import React from 'react';
import { createStyles, hexToRgba } from '@mantine/styles';
import { Accordion, AccordionProps } from '../Accordion';
import { baseDemoItems } from './_base';

const code = `
import { Accordion, AccordionProps, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  control: {
    fontSize: theme.fontSizes.lg,
  },

  item: {
    border: \`1px solid \${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]}\`,

    '&:first-of-type': {
      borderTopRightRadius: theme.radius.sm,
      borderTopLeftRadius: theme.radius.sm,
    },

    '&:last-of-type': {
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
      borderBottomRightRadius: theme.radius.sm,
      borderBottomLeftRadius: theme.radius.sm,
    },

    '& + &': {
      borderTop: 'none',
    },
  },

  itemOpened: {
    '& $control': {
      backgroundColor: theme.colors.blue[theme.colorScheme === 'dark' ? 9 : 0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.blue[9],
    },
  },

  contentInner: {
    paddingTop: theme.spacing.md,
  },
}));

function StyledAccordion(props: AccordionProps) {
  const { classes } = useStyles();
  return <Accordion classNames={classes} {...props} />;
}

function Demo() {
  return (
    <StyledAccordion>
      <Accordion.Item label="Customization">
        Colors, fonts, shadows and many other parts are customizable to fit your design needs
      </Accordion.Item>

      <Accordion.Item label="Flexibility">
        Configure components appearance and behavior with vast amount of settings or overwrite any
        part of component styles
      </Accordion.Item>

      <Accordion.Item label="No annoying focus ring">
        With new :focus-visible pseudo-class focus ring appears only when user navigates with
        keyboard
      </Accordion.Item>
    </StyledAccordion>
  );
}
`;

const useStyles = createStyles((theme, _params, getRef) => {
  const control = {
    ref: getRef('control'),
    fontSize: theme.fontSizes.lg,
    border: 0,
  } as const;

  return {
    control,

    item: {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
      borderBottom: 0,
      overflow: 'hidden',

      '&:first-of-type': {
        borderTopRightRadius: theme.radius.sm,
        borderTopLeftRadius: theme.radius.sm,
      },

      '&:last-of-type': {
        borderBottomRightRadius: theme.radius.sm,
        borderBottomLeftRadius: theme.radius.sm,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
      },
    },

    itemOpened: {
      [`& .${control.ref}, & .${control.ref}:hover`]: {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? hexToRgba(theme.colors.blue[9], 0.45)
            : theme.colors.blue[0],
        color: theme.colorScheme === 'dark' ? theme.colors.blue[1] : theme.colors.blue[9],
      },
    },

    content: {
      paddingLeft: 0,
    },
  };
});

export function StyledAccordion(props: AccordionProps) {
  const { classes } = useStyles();
  return <Accordion classNames={classes} {...props} />;
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
