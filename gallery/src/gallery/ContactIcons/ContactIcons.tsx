import React from 'react';
import { createStyles, ThemeIcon, Text, Group, SimpleGrid, useMantineTheme } from '@mantine/core';
import { Sun, Phone, MapPin, AtSign } from 'react-feather';

type Variant = 'white' | 'gradient';

const useStyles = createStyles((theme, { variant }: { variant: Variant }) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === 'gradient'
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : 'none',
    backgroundColor: 'transparent',
  },

  title: {
    color: variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === 'gradient' ? theme.black : theme.white,
  },
}));

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: Variant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = 'gradient',
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === 'gradient' ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={22} />
        </ThemeIcon>
      ) : (
        <Icon size={22} style={{ marginRight: 15 }} />
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: Variant;
}

const MOCKDATA = [
  { title: 'Email', description: 'hello@mantine.dev', icon: AtSign },
  { title: 'Phone', description: '+49 (800) 335 35 35', icon: Phone },
  { title: 'Address', description: '844 Morris Park avenue', icon: MapPin },
  { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: Sun },
];

export function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
  return <Group direction="column">{items}</Group>;
}

export function ContactIcons() {
  const theme = useMantineTheme();

  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <div style={{ padding: theme.spacing.xl, backgroundColor: theme.white }}>
        <ContactIconsList />
      </div>

      <div
        style={{
          padding: theme.spacing.xl,
          backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][6]} 0%, ${
            theme.colors[theme.primaryColor][4]
          } 100%)`,
        }}
      >
        <ContactIconsList variant="white" />
      </div>
    </SimpleGrid>
  );
}
