import React from 'react';
import { Container, SimpleGrid, Title, Text } from '@mantine/core';
import { CategoryCard, CategoryCardProps } from './CategoryCard/CategoryCard';
import useStyles from './CategoriesList.styles';

export type { CategoryCardProps };

export interface CategoriesListItem {
  count: number;
  groups: CategoryCardProps[];
  name: string;
}

interface CategoriesListProps {
  categories: CategoriesListItem[];
}

export function CategoriesList({ categories }: CategoriesListProps) {
  const { classes } = useStyles();

  const cards = categories.map((category) => {
    const groups = category.groups.map((group) => <CategoryCard key={group.url} {...group} />);
    return (
      <div key={category.name} className={classes.group}>
        <div className={classes.header}>
          <Title className={classes.title} order={2}>
            {category.name}
          </Title>

          <Text size="sm" color="dimmed" className={classes.count}>
            {category.count} components
          </Text>
        </div>

        <SimpleGrid
          id="cards-grid"
          cols={4}
          breakpoints={[
            { maxWidth: 1000, cols: 3 },
            { maxWidth: 755, cols: 2 },
            { maxWidth: 500, cols: 1 },
          ]}
        >
          {groups}
        </SimpleGrid>
      </div>
    );
  });

  return (
    <Container size="xl" padding="md" className={classes.wrapper}>
      {cards}
    </Container>
  );
}
