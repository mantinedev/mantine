import React from 'react';
import { Link } from 'gatsby';
import { Card, CardSection, Text, Image, Overlay } from '@mantine/core';
import useStyles from './CategoryCard.styles';

interface CategoryCardProps {
  name: string;
  slug: string;
  image: string;
}

export function CategoryCard({ name, slug, image }: CategoryCardProps) {
  const classes = useStyles();
  return (
    <Card className={classes.card} radius="md">
      <CardSection>
        <Image src={image} />
      </CardSection>

      <Text className={classes.title}>{name}</Text>
      <Text className={classes.description} size="xs">
        9 components
      </Text>

      <Overlay component={Link} to={`/gallery/category/${slug}`} opacity={0} />
    </Card>
  );
}
