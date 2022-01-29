import React from 'react';
import { createStyles, Title, Container, Accordion, ThemeIcon, Button } from '@mantine/core';
import { Plus } from 'tabler-icons-react';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('control');

  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      minHeight: 820,
      backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${
        theme.colors[theme.primaryColor][4]
      } 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
      position: 'relative',
    },

    title: {
      color: theme.white,
      fontSize: 52,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      marginBottom: theme.spacing.xl * 1.5,
    },

    item: {
      marginTop: theme.spacing.xl,
      backgroundColor: theme.white,
      borderBottom: 0,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
    },

    control: {
      fontSize: theme.fontSizes.lg,
      padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
      color: theme.black,

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
      color: theme.black,
    },

    icon: {
      ref: icon,
      marginLeft: theme.spacing.md,
    },

    gradient: {
      backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${
        theme.colors[theme.primaryColor][5]
      } 100%)`,
    },

    itemOpened: {
      [`& .${icon}`]: {
        transform: 'rotate(45deg)',
      },
    },

    button: {
      display: 'block',
      marginTop: theme.spacing.md,

      '@media (max-width: 755px)': {
        display: 'block',
        width: '100%',
      },
    },
  };
});

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function FaqWithBg() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title align="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion
          iconPosition="right"
          initialItem={0}
          classNames={{
            item: classes.item,
            itemOpened: classes.itemOpened,
            control: classes.control,
            icon: classes.icon,
            contentInner: classes.content,
          }}
          icon={
            <ThemeIcon radius="xl" className={classes.gradient} size={32}>
              <Plus size={18} />
            </ThemeIcon>
          }
        >
          <Accordion.Item label="How can I reset my password?">
            {placeholder}
            <Button className={cx(classes.gradient, classes.button)}>Reset password</Button>
          </Accordion.Item>
          <Accordion.Item label="Can I create more that one account?">{placeholder}</Accordion.Item>
          <Accordion.Item label="Do you store credit card information securely?">
            {placeholder}
          </Accordion.Item>
          <Accordion.Item label="What payment systems to you work with?">
            {placeholder}
          </Accordion.Item>
          <Accordion.Item label="How can I subscribe to monthly newsletter?">
            {placeholder}
            <Button className={cx(classes.gradient, classes.button)}>
              Subscribe to newsletter
            </Button>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
