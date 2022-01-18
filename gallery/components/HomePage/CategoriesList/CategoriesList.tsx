import React from 'react';
import { Container, SimpleGrid, Title, Text } from '@mantine/core';
import { GalleryCategoriesGroup } from '../../../data';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import useStyles from './CategoriesList.styles';

interface CategoriesListProps {
  groups: GalleryCategoriesGroup[];
  componentsCountByCategory: Record<string, number>;
}

export function CategoriesList({ groups, componentsCountByCategory }: CategoriesListProps) {
  const { classes } = useStyles();

  const items = groups.map((group) => {
    const cards = group.categories.map((category) => (
      <CategoryCard
        key={category.slug}
        category={category}
        count={componentsCountByCategory[category.slug]}
      />
    ));

    const totalComponents = group.categories.reduce(
      (acc, category) => acc + componentsCountByCategory[category.slug],
      0
    );

    return (
      <div key={group.name} className={classes.group}>
        <div className={classes.header}>
          <Title className={classes.title} order={2}>
            {group.name}
          </Title>

          <Text size="sm" color="dimmed" className={classes.count}>
            {totalComponents} components
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
          {cards}
        </SimpleGrid>
      </div>
    );
  });

  return (
    <Container size="xl" padding="md" className={classes.wrapper}>
      {items}
    </Container>
  );
}
