import React from 'react';
import { Link } from 'gatsby';
import { Text } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { ArrowLeftIcon, ArrowRightIcon } from '@modulz/radix-icons';
import { Frontmatter } from '../../../../types';
import useStyles from './MdxSibling.styles';

interface MdxSiblingProps {
  data: Frontmatter;
  type: 'next' | 'prev';
  className?: string;
}

export function MdxSibling({ data, type, className }: MdxSiblingProps) {
  const { classes, cx } = useStyles();
  const iconStyle = { width: 22, height: 22 };

  return (
    <Link to={data.slug} className={cx(classes.control, classes[type], className)}>
      {type === 'prev' && <ArrowLeftIcon style={iconStyle} />}

      <div className={classes.body}>
        <Text size="lg" align={type === 'next' ? 'left' : 'right'}>
          {type === 'next' ? 'Up next' : 'Go back'}
        </Text>
        <Text color="dimmed" size="sm" align={type === 'next' ? 'left' : 'right'}>
          {data.title} – {data.package || upperFirst(data.group)}
        </Text>
      </div>

      {type === 'next' && <ArrowRightIcon style={iconStyle} />}
    </Link>
  );
}
