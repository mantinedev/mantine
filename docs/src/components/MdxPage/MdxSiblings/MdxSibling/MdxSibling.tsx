import React from 'react';
import { Link } from 'gatsby';
import { Text, rem } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { Frontmatter } from '../../../../types';
import useStyles from './MdxSibling.styles';

interface MdxSiblingProps {
  data: Frontmatter;
  type: 'next' | 'prev';
  className?: string;
}

export function MdxSibling({ data, type, className }: MdxSiblingProps) {
  const { classes, cx } = useStyles();

  return (
    <Link to={data.slug} className={cx(classes.control, classes[type], className)}>
      {type === 'prev' && <IconArrowLeft size={rem(22)} stroke={1.5} />}

      <div className={classes.body}>
        <Text size="lg" align={type === 'next' ? 'left' : 'right'}>
          {type === 'next' ? 'Up next' : 'Go back'}
        </Text>
        <Text color="dimmed" size="sm" align={type === 'next' ? 'left' : 'right'}>
          {data.title} – {data.package || upperFirst(data.group)}
        </Text>
      </div>

      {type === 'next' && <IconArrowRight size={rem(22)} stroke={1.5} />}
    </Link>
  );
}
