import React, { useState } from 'react';
import {
  createStyles,
  Title,
  Container,
  Text,
  useMantineTheme,
  Group,
  ThemeIcon,
  UnstyledButton,
  SimpleGrid,
  Overlay,
} from '@mantine/core';
import { Sun, Phone, MapPin, AtSign } from 'react-feather';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
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
    marginBottom: theme.spacing.xl * 1.5,

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
    top: -15,
    left: 32,
    pointerEvents: 'none',

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
}));

function Contact({
  className,
  title,
  description,
  icon: Icon,
}: {
  className?: string;
  title: string;
  description: string;
  icon: React.FC<React.ComponentProps<typeof Sun>>;
}) {
  const theme = useMantineTheme();
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }} className={className}>
      <ThemeIcon
        size={40}
        radius="md"
        style={{
          marginRight: theme.spacing.md,
          backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`,
        }}
      >
        <Icon size={22} />
      </ThemeIcon>

      <div>
        <Text size="xs" style={{ color: theme.colors.gray[6] }}>
          {title}
        </Text>
        <Text style={{ color: theme.black }}>{description}</Text>
      </div>
    </div>
  );
}

function Category({
  className,
  title,
  image,
  active,
  onClick,
}: {
  className?: string;
  title: string;
  image: string;
  active: boolean;
  onClick(): void;
}) {
  const theme = useMantineTheme();
  return (
    <UnstyledButton
      className={className}
      onClick={onClick}
      style={{
        height: 160,
        position: 'relative',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: `1px solid ${active ? theme.colors[theme.primaryColor][6] : theme.colors.gray[3]}`,
        color: theme.white,
        borderRadius: theme.radius.md,
        padding: theme.spacing.xl,
        overflow: 'hidden',
      }}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Group direction="column" align="center" style={{ zIndex: 2, position: 'relative' }}>
        <Text size="xl" weight={700} style={{ color: theme.white }}>
          {title}
        </Text>
      </Group>
    </UnstyledButton>
  );
}

const CATEGORIES_DATA = [
  {
    title: 'Customer Support',
    image:
      'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'User Guides',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Sales Questions',
    image:
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
];

export function FaqWithHeader() {
  const { classes } = useStyles();
  const [activeCategory, setActiveCategory] = useState(-1);

  const categories = CATEGORIES_DATA.map((category, index) => (
    <Category
      key={category.title}
      {...category}
      active={index === activeCategory}
      onClick={() => setActiveCategory(index === activeCategory ? -1 : index)}
    />
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

          <Group direction="column">
            <Contact title="Email" description="hello@mantine.dev" icon={AtSign} />
            <Contact title="Phone" description="+49 (800) 335 35 35" icon={Phone} />
            <Contact title="Address" description="844 Morris Park avenue" icon={MapPin} />
            <Contact title="Working hours" description="8 a.m. – 11 p.m." icon={Sun} />
          </Group>
        </div>
      </div>

      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 900, cols: 1 }]}>
        {categories}
      </SimpleGrid>
    </Container>
  );
}
