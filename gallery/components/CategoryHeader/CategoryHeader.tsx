import React from 'react';
import Link from 'next/link';
import { Title, Anchor, Center, Box } from '@mantine/core';
import { ArrowLeftIcon, ArrowRightIcon } from '@modulz/radix-icons';
import { GalleryCategory } from '../../data';
import useStyles from './CategoryHeader.styles';

interface CategoryHeaderProps {
  category: GalleryCategory;
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  const { classes, theme } = useStyles();
  return (
    <>
      <Link href="/">
        <Anchor href="/">
          <Center sx={{ display: 'inline-flex', flexDirection: 'row' }}>
            {theme.dir === 'rtl' ? <ArrowRightIcon /> : <ArrowLeftIcon />}
            <Box component="span" ml={5}>
              Back to all categories
            </Box>
          </Center>
        </Anchor>
      </Link>

      <Title className={classes.title}>{category.name}</Title>
    </>
  );
}
