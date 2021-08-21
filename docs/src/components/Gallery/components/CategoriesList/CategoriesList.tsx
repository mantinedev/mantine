import React from 'react';
import { Container } from '@mantine/core';
import { CategoryCard } from './CategoryCard/CategoryCard';
import data from './categories';

export function CategoriesList() {
  const cards = data.map((category) => <CategoryCard key={category.slug} {...category} />);

  return <Container style={{ paddingTop: 20 }}>{cards}</Container>;
}
