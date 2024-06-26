import Link from 'next/link';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Badge, Card, Text } from '@mantine/core';
import { frameworkIcons } from '@/components/icons';
import classes from './GettingStartedCard.module.css';

interface GettingStartedCardProps {
  title: string;
  description?: string;
  logo: keyof typeof frameworkIcons;
  link: string;
  type: 'primary' | 'secondary';
  secondaryBreakpoint: 'md' | 'xl';
}

export function GettingStartedCard({
  title,
  description,
  logo,
  link,
  type,
  secondaryBreakpoint,
}: GettingStartedCardProps) {
  const Icon = frameworkIcons[logo];
  return (
    <Card
      withBorder
      radius="lg"
      padding="xl"
      component={Link}
      href={link}
      data-type={type}
      className={classes.root}
    >
      {type === 'primary' && (
        <>
          <IconArrowUpRight className={classes.arrow} />
          <Badge color="red.8" size="md" className={classes.recommended}>
            Recommended
          </Badge>
        </>
      )}

      <div className={classes.iconWrapper} data-logo={logo} data-breakpoint={secondaryBreakpoint}>
        <Icon className={classes.icon} data-logo={logo} />
      </div>

      <div>
        <Text className={classes.title}>{title}</Text>
        {description && <Text className={classes.description}>{description}</Text>}
      </div>
    </Card>
  );
}
