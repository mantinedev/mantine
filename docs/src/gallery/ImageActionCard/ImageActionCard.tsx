import React from 'react';
import cx from 'clsx';
import { createUseStyles } from 'react-jss';
import { theming, Card, Overlay, CardProps, Button, Text } from '@mantine/core';

const useStyles = createUseStyles(
  (theme) => ({
    card: {
      height: 240,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },

    content: {
      position: 'absolute',
      padding: theme.spacing.xl,
      zIndex: 1,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },

    action: {
      backgroundColor: theme.white,
      color: theme.black,
      textShadow: 'none',
      position: 'absolute',
      bottom: theme.spacing.xl,
      right: theme.spacing.xl,
    },

    title: {
      color: theme.white,
      marginBottom: theme.spacing.xs / 2,
    },

    description: {
      color: theme.white,
      maxWidth: 220,
    },

    overlay: {
      backgroundImage: `linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`,
    },
  }),
  { theming }
);

interface ImageActionCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  action: {
    label: string;
    link: string;
  };
}

export function ImageActionCard({
  title,
  description,
  image,
  action,
  style,
  className,
  ...others
}: ImageActionCardProps &
  Omit<CardProps<'div', HTMLDivElement>, keyof ImageActionCardProps | 'children'>) {
  const classes = useStyles();

  return (
    <Card
      radius="md"
      {...others}
      style={{ backgroundImage: `url(${image})`, ...style }}
      className={cx(classes.card, className)}
    >
      <Overlay color="transparent" opacity={0.55} zIndex={0} className={classes.overlay} />

      <div className={classes.content}>
        <Text size="lg" weight={700} className={classes.title}>
          {title}
        </Text>

        <Text size="sm" className={classes.description}>
          {description}
        </Text>

        <Button
          className={classes.action}
          component="a"
          href={action.link}
          target="_blank"
          size="xs"
        >
          {action.label}
        </Button>
      </div>
    </Card>
  );
}
