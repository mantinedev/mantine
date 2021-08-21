import React from 'react';
import { Link } from 'gatsby';
import { Card, CardSection, Text, Image, Overlay } from '@mantine/core';
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

  return (
    <Card className={classes.card} radius="md">
      <CardSection>
        <Image src={images[category]} />
      </CardSection>

      <Text className={classes.title}>{name}</Text>
      <Text className={classes.description} size="xs">
        {count} components
      </Text>

      <Overlay component={Link} to={url} opacity={0} />
    </Card>
  );
}
