import React from 'react';
import { createUseStyles } from 'react-jss';
import { theming, Title, Text } from '@mantine/core';
import { InlineForm } from '../InlineForm/InlineForm';

const useStyles = createUseStyles(
  (theme) => ({
    wrapper: {
      paddingBottom: 80,
    },

    imageSection: {
      '& *': {
        color: theme.white,
        textAlign: 'center',
      },

      paddingTop: 200,
      paddingBottom: 100,
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage:
        'url(https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80)',
    },

    body: {
      position: 'relative',
      zIndex: 1,
    },

    subheader: {
      fontWeight: 800,
      textTransform: 'uppercase',
      fontSize: theme.fontSizes.xs,
      letterSpacing: 1,
      marginBottom: 5,
    },

    title: {
      fontWeight: 800,
      fontSize: 40,
      marginBottom: theme.spacing.xs,
    },

    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      zIndex: 0,
      backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 5%, #000000 95%)',
    },

    form: {
      position: 'relative',
      maxWidth: 820,
      marginLeft: 'auto',
      marginRight: 'auto',
      zIndex: 2,
      marginTop: -60,
      boxShadow: theme.shadows.lg,
      borderRadius: theme.spacing.md,
    },

    label: {
      color: theme.white,
    },
  }),
  { theming }
);

export function HeroForm() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageSection}>
        <div className={classes.body}>
          <Text className={classes.subheader}>Welcome to</Text>
          <Title className={classes.title}>Fifth Season Hotels</Title>
          <Text size="lg">Book now to get a 20% discount</Text>
        </div>
        <div className={classes.overlay} />
      </div>

      <InlineForm className={classes.form} labelClassName={classes.label} />
    </div>
  );
}
