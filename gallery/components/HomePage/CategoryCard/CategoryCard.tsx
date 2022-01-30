import React from 'react';
import Link from 'next/link';
import { Card, CardSection, Text, Image, useMantineTheme } from '@mantine/core';
import { GalleryCategory } from '../../../data';
import useStyles from './CategoryCard.styles';

export interface CategoryCardProps {
  className?: string;
  category: GalleryCategory;
  count: number;
}

export function CategoryCard({ count, category, className }: CategoryCardProps) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
    <Link href={`/category/${category.slug}`}>
      <Card className={cx(classes.card, className)} radius="md">
        <CardSection className={classes.imageWrapper}>
          <Image
            className={classes.image}
            src={category.images[theme.colorScheme]}
            alt={category.name}
          />
        </CardSection>

        <Text className={classes.title}>{category.name}</Text>
        <Text className={classes.description} size="xs">
          {count} {count === 1 ? 'component' : 'components'}
        </Text>
      </Card>
    </Link>
  );
}
