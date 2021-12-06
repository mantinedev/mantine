import React from 'react';
import { Link } from 'gatsby';
import { Card, CardSection, Text, Image, Overlay, useMantineTheme } from '@mantine/core';
import images from './images';
import useStyles from './CategoryCard.styles';

export interface CategoryCardProps {
  className?: string;
  name: string;
  count: number;
  url: string;
  category: string;
}

export function CategoryCard({ name, url, count, category, className }: CategoryCardProps) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
    <Card className={cx(classes.card, className)} radius="md">
      <CardSection className={classes.imageWrapper}>
        <Image className={classes.image} src={images[category][theme.colorScheme]} alt={name} />
      </CardSection>

      <Text className={classes.title}>{name}</Text>
      <Text className={classes.description} size="xs">
        {count} components
      </Text>

      <Overlay component={Link} to={url} opacity={0} />
    </Card>
  );
}
