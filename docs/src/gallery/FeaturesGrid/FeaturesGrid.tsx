import React from 'react';
import { createUseStyles } from 'react-jss';
import {
  LightningBoltIcon,
  LockClosedIcon,
  CookieIcon,
  ChatBubbleIcon,
  PersonIcon,
} from '@modulz/radix-icons';
import { ThemeIcon, Text, theming, Title, Container, useMantineTheme } from '@mantine/core';

interface FeatureProps {
  icon: React.FC<React.ComponentPropsWithoutRef<typeof LightningBoltIcon>>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({
  icon: Icon,
  title,
  description,
  ...others
}: FeatureProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof FeatureProps>) {
  const theme = useMantineTheme();
  return (
    <div {...others}>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: 20, height: 20 }} />
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: theme.spacing.xs / 2 }}>
        {title}
      </Text>
      <Text size="sm" color="dimmed">
        {description}
      </Text>
    </div>
  );
}

const MOCKDATA = [
  {
    icon: LightningBoltIcon,
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
  },
  {
    icon: PersonIcon,
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
  },
  {
    icon: CookieIcon,
    title: 'No third parties',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
  },
  {
    icon: LockClosedIcon,
    title: 'Secure by default',
    description:
      'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right',
  },
  {
    icon: ChatBubbleIcon,
    title: '24/7 Support',
    description:
      'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
  },
];

const useStyles = createUseStyles(
  (theme) => ({
    wrapper: {
      paddingTop: theme.spacing.xl * 4,
      paddingBottom: theme.spacing.xl * 4,
    },

    title: {
      fontFamily: 'Dosis, sans-serif',
      fontWeight: 900,
      marginBottom: theme.spacing.md,
    },

    features: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: -theme.spacing.xl,
      marginRight: -theme.spacing.xl,
      marginTop: theme.spacing.xl,

      '@media (max-width: 600px)': {
        marginLeft: -theme.spacing.xl / 2,
        marginRight: -theme.spacing.xl / 2,
      },
    },

    feature: {
      width: '100%',
      margin: theme.spacing.xl,
      maxWidth: `calc(33.33333% - ${theme.spacing.xl * 2}px)`,

      '@media (max-width: 980px)': {
        maxWidth: `calc(50% - ${theme.spacing.xl * 2}px)`,
      },

      '@media (max-width: 600px)': {
        margin: theme.spacing.xl / 2,
        maxWidth: `calc(100% - ${theme.spacing.xl}px)`,
      },
    },
  }),
  { theming }
);

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

export function FeaturesGrid({ title, description, data = MOCKDATA }: FeaturesGridProps) {
  const classes = useStyles();
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} className={classes.feature} />
  ));

  return (
    <Container className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        {title}
      </Title>
      <Container size={560}>
        <Text align="center" size="sm">
          {description}
        </Text>
      </Container>
      <div className={classes.features}>{features}</div>
    </Container>
  );
}
