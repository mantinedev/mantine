import Link from 'next/link';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import cx from 'clsx';
import { Box, FOCUS_CLASS_NAMES, Text } from '@mantine/core';
import { Frontmatter } from '@/types';
import { getMdxSiblings } from './get-mdx-siblings';
import classes from './MdxSiblings.module.css';

interface MdxSiblingsProps {
  meta: Frontmatter;
}

export function MdxSiblings({ meta }: MdxSiblingsProps) {
  const { next, prev } = getMdxSiblings(meta.slug);

  if (meta.hideSiblings) {
    return null;
  }

  return (
    <div className={classes.root}>
      {prev && (
        <Link href={prev.slug} className={cx(classes.link, FOCUS_CLASS_NAMES.auto)}>
          <IconArrowLeft stroke={1.5} className={classes.icon} />
          <Box mod="prev" className={classes.body}>
            <Text className={classes.title}>Previous</Text>
            <Text c="dimmed" className={classes.description}>
              {prev.title}
            </Text>
          </Box>
        </Link>
      )}

      {next && (
        <Link href={next.slug} className={cx(classes.link, FOCUS_CLASS_NAMES.auto)}>
          <Box mod="next" className={classes.body}>
            <Text className={classes.title}>Next</Text>
            <Text c="dimmed" className={classes.description}>
              {next.title}
            </Text>
          </Box>
          <IconArrowRight stroke={1.5} className={classes.icon} />
        </Link>
      )}
    </div>
  );
}
