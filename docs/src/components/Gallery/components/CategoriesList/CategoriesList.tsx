import React from 'react';
import { Container } from '@mantine/core';
import { CategoryCard, CategoryCardProps } from './CategoryCard/CategoryCard';

export type { CategoryCardProps };

interface CategoriesListProps {
  categories: CategoryCardProps[];
}

export function CategoriesList({ categories }: CategoriesListProps) {
  const cards = categories.map((category) => <CategoryCard key={category.url} {...category} />);

  return <Container style={{ paddingTop: 20 }}>{cards}</Container>;
}
