import React from 'react';
import { Link } from 'gatsby';
import { Card, CardSection, Text, Image, Overlay, useMantineTheme } from '@mantine/core';
import images from './images';
import useStyles from './CategoryCard.styles';

export interface CategoryCardProps {
  name: string;
  count: number;
  url: string;
  category: string;
}

export function CategoryCard({ name, url, count, category }: CategoryCardProps) {
  const classes = useStyles();
  const theme = useMantineTheme();

  return (
    <Card className={classes.card} radius="md">
      <CardSection className={classes.imageWrapper}>
        <Image className={classes.image} src={images[category][theme.colorScheme]} />
      </CardSection>

      <Text className={classes.title}>{name}</Text>
      <Text className={classes.description} size="xs">
        {count} components
      </Text>

      <Overlay component={Link} to={url} opacity={0} />
    </Card>
  );
}
