import React from 'react';
import { createStyles, Title, Container, Accordion, ThemeIcon, Button } from '@mantine/core';
import { PlusIcon } from '@primer/octicons-react';
import bg from './bg.svg';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('control');

  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 4,
      minHeight: 450,
      backgroundImage: `url(${bg}), linear-gradient(162deg, ${theme.colors.blue[6]} 0%, ${theme.colors.violet[5]} 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
      backgroundSize: '100%',
    },

    title: {
      color: theme.white,
      fontSize: 52,
      fontFamily: `Dosis, ${theme.fontFamily}`,
      marginBottom: theme.spacing.xl * 2,
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
      paddingTop: theme.spacing.lg,
      paddingBottom: theme.spacing.lg,
      paddingLeft: theme.spacing.xl,

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
    },

    icon: {
      ref: icon,
      marginLeft: theme.spacing.md,
    },

    gradient: {
      backgroundImage: `linear-gradient(104deg, ${theme.colors.indigo[6]} 0%, ${theme.colors.violet[5]} 100%)`,
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
          classNames={{
            item: classes.item,
            itemOpened: classes.itemOpened,
            control: classes.control,
            icon: classes.icon,
            contentInner: classes.content,
          }}
          icon={
            <ThemeIcon radius="xl" className={classes.gradient} size={32}>
              <PlusIcon size={18} />
            </ThemeIcon>
          }
        >
          <Accordion.Item label="How can I reset my password?">
            {placeholder}
            <Button className={cx(classes.gradient, classes.button)}>Reset password</Button>
          </Accordion.Item>
          <Accordion.Item label="Can I create more that one account?">{placeholder}</Accordion.Item>
          <Accordion.Item label="How can I subscribe to monthly newsletter?">
            {placeholder}
            <Button className={cx(classes.gradient, classes.button)}>
              Subscribe to newsletter
            </Button>
          </Accordion.Item>
          <Accordion.Item label="Do you store credit card information securely?">
            {placeholder}
          </Accordion.Item>
          <Accordion.Item label="What payment systems to you work with?">
            {placeholder}
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
