import React from 'react';
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  MantineProvider,
  useMantineTheme,
  ActionIcon,
} from '@mantine/core';
import { BrandTwitter, BrandFacebook, BrandInstagram } from 'tabler-icons-react';
import { ContactIconsList } from '../ContactIcons/ContactIcons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },
}));

const social = [BrandTwitter, BrandFacebook, BrandInstagram];

export function ContactUs() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size={28} />
    </ActionIcon>
  ));

  return (
    <MantineProvider theme={{ colorScheme: 'light', primaryColor: theme.primaryColor }}>
      <div className={classes.wrapper}>
        <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you within 24 hours
            </Text>

            <ContactIconsList variant="white" />

            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
            <TextInput label="Email" placeholder="your@email.com" required />
            <TextInput label="Name" placeholder="John Doe" mt="md" />
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={4}
              mt="md"
            />
            <Group position="right" mt="md">
              <Button>Send message</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    </MantineProvider>
  );
}
