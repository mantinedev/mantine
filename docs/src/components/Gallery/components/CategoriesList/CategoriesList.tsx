import React from 'react';
import { Container } from '@mantine/core';
import { CategoryCard, CategoryCardProps } from './CategoryCard/CategoryCard';
import useStyles from './CategoriesList.styles';

export type { CategoryCardProps };

interface CategoriesListProps {
  categories: CategoryCardProps[];
}

export function CategoriesList({ categories }: CategoriesListProps) {
  const classes = useStyles();
  const cards = categories.map((category) => (
    <CategoryCard className={classes.card} key={category.url} {...category} />
  ));

  return (
    <Container style={{ paddingTop: 20 }}>
      <div className={classes.cards}>{cards}</div>
    </Container>
  );
}
