import React from 'react';
import {
  createStyles,
  UnstyledButton,
  Overlay,
  Text,
  SimpleGrid,
  SimpleGridProps,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: 160,
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: theme.white,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.xl,
    overflow: 'hidden',
  },

  label: {
    color: theme.white,
    zIndex: 2,
    position: 'relative',
  },
}));

interface CardProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string;
  children: React.ReactNode;
}

export function ImageButtonCard({ image, children, style, className, ...others }: CardProps) {
  const { classes, cx } = useStyles();
  return (
    <UnstyledButton
      {...others}
      style={{ backgroundImage: `url(${image})`, ...style }}
      className={cx(classes.card, className)}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Text size="xl" align="center" weight={700} className={classes.label}>
        {children}
      </Text>
    </UnstyledButton>
  );
}

const MOCKDATA = [
  {
    children: 'Customer Support',
    image:
      'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    children: 'User Guides',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  },
  {
    children: 'Sales Questions',
    image:
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
];

export function ImageButtonCards(props: Partial<SimpleGridProps>) {
  const cards = MOCKDATA.map((item) => <ImageButtonCard {...item} key={item.children} />);

  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 900, cols: 1 }]} {...props}>
      {cards}
    </SimpleGrid>
  );
}
