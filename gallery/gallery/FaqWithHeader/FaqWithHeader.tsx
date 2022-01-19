import React from 'react';
import {
  createStyles,
  Title,
  Container,
  Text,
  UnstyledButton,
  Overlay,
  SimpleGrid,
} from '@mantine/core';
import { ContactIconsList } from '../ContactIcons/ContactIcons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xl * 2,
  },

  header: {
    height: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][6]
    } 100%)`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    position: 'relative',
    padding: `${theme.spacing.xl * 1.5}px ${theme.spacing.xl * 2}px`,
    borderRadius: theme.radius.lg,
    marginBottom: theme.spacing.lg,

    '@media (max-width: 1080px)': {
      height: 'auto',
      flexDirection: 'column-reverse',
      alignItems: 'initial',
      padding: theme.spacing.xl,
    },
  },

  title: {
    color: theme.white,
    position: 'relative',
    zIndex: 1,
    fontSize: 46,
    fontWeight: 800,
    letterSpacing: -0.5,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 1080px)': {
      fontSize: 22,
      textAlign: 'center',
      marginTop: theme.spacing.xl,
    },
  },

  titleOverlay: {
    zIndex: 0,
    position: 'absolute',
    color: theme.white,
    fontWeight: 900,
    opacity: 0.1,
    fontSize: 320,
    lineHeight: 1,
    top: 10,
    left: 32,
    pointerEvents: 'none',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 1080px)': {
      display: 'none',
    },
  },

  contact: {
    padding: `${theme.spacing.xl * 1.5}px`,
    backgroundColor: theme.white,
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.md,

    '@media (max-width: 1080px)': {
      padding: `${theme.spacing.xl}px`,
    },
  },

  contactTitle: {
    color: theme.black,
    marginBottom: theme.spacing.xl,
    lineHeight: 1,
  },

  categoryCard: {
    height: 160,
    position: 'relative',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    color: theme.white,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.xl,
    overflow: 'hidden',
    transition: 'background-size 300ms ease',

    '&:hover': {
      backgroundSize: '105%',
    },
  },

  categoryLabel: {
    color: theme.white,
    zIndex: 2,
    position: 'relative',
  },
}));

interface FaqWithHeaderProps {
  categories: { image: string; label: string }[];
}

export function FaqWithHeader({ categories }: FaqWithHeaderProps) {
  const { classes } = useStyles();

  const items = categories.map((category) => (
    <UnstyledButton
      style={{ backgroundImage: `url(${category.image})` }}
      className={classes.categoryCard}
      key={category.label}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Text size="xl" align="center" weight={700} className={classes.categoryLabel}>
        {category.label}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Container className={classes.wrapper} size="lg">
      <div className={classes.header}>
        <Title className={classes.title}>Frequently Asked Questions</Title>
        <Title className={classes.titleOverlay} role="presentation">
          FAQ
        </Title>

        <div className={classes.contact}>
          <Text size="xl" weight={500} className={classes.contactTitle}>
            Contact us
          </Text>

          <ContactIconsList />
        </div>
      </div>

      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
