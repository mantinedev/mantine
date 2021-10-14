import React from 'react';
import { Link } from 'gatsby';
import { Title, Anchor, Center } from '@mantine/core';
import { ArrowLeftIcon } from '@modulz/radix-icons';
import { GalleryPageCategory } from '../../types';
import useStyles from './CategoryHeader.styles';

interface CategoryHeaderProps {
  category: GalleryPageCategory;
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  const { classes } = useStyles();
  return (
    <div>
      <Anchor component={Link} to="/">
        <Center style={{ display: 'inline-flex' }}>
          <ArrowLeftIcon style={{ marginRight: 5 }} />
          <span>Back to all categories</span>
        </Center>
      </Anchor>

      <Title className={classes.title}>{category.name}</Title>
    </div>
  );
}
