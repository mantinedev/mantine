import React from 'react';
import { Image, Text, Title, Button, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
    },
  },

  header: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    marginBottom: theme.spacing.lg,
  },

  body: {
    flex: '0 0 60%',
    marginLeft: theme.spacing.xl * 2,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flex: '0 0 100%',
      marginLeft: 0,
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: '100%',
    },
  },

  title: {
    fontSize: 52,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.lg,
    fontWeight: 900,
    lineHeight: 0.9,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 32,
      lineHeight: 1.1,
    },
  },
}));

interface ImageBannerProps {
  image: string;
  header: string;
  title: string;
  action: string;
}

export function ImageBanner({ image, header, title, action }: ImageBannerProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Image src={image} radius="md" />
      <div className={classes.body}>
        <Text color="dimmed" className={classes.header}>
          {header}
        </Text>
        <Title order={2} className={classes.title}>
          {title}
        </Title>
        <Button variant="light" size="md" className={classes.control}>
          {action}
        </Button>
      </div>
    </div>
  );
}
