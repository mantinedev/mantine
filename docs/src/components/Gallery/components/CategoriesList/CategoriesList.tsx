import React from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import { CategoryCard, CategoryCardProps } from './CategoryCard/CategoryCard';

export type { CategoryCardProps };

interface CategoriesListProps {
  categories: CategoryCardProps[];
}

export function CategoriesList({ categories }: CategoriesListProps) {
  const cards = categories.map((category) => <CategoryCard key={category.url} {...category} />);

  return (
    <Container style={{ paddingTop: 20 }}>
      <SimpleGrid
        id="cards-grid"
        cols={3}
        breakpoints={[
          { maxWidth: 755, cols: 2 },
          { maxWidth: 500, cols: 1 },
        ]}
      >
        {cards}
      </SimpleGrid>
    </Container>
  );
}
