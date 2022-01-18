import React from 'react';
import Link from 'next/link';
import { Title, Anchor, Center } from '@mantine/core';
import { ArrowLeftIcon } from '@modulz/radix-icons';
import { GalleryCategory } from '../../data';
import useStyles from './CategoryHeader.styles';

interface CategoryHeaderProps {
  category: GalleryCategory;
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  const { classes } = useStyles();
  return (
    <div>
      <Anchor component={Link} href="/">
        <Center style={{ display: 'inline-flex' }}>
          <ArrowLeftIcon style={{ marginRight: 5 }} />
          <span>Back to all categories</span>
        </Center>
      </Anchor>

      <Title className={classes.title}>{category.name}</Title>
    </div>
  );
}
