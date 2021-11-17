import React from 'react';
import { DefaultProps, ClassNames } from '@mantine/styles';
import useStyles from './RenderList.styles';

export type RenderListStylesNames = ClassNames<typeof useStyles>;

interface RenderListProps extends DefaultProps<RenderListStylesNames> {}

export function RenderList({ className }: RenderListProps) {
  const { classes, cx } = useStyles();
  return <div className={cx(classes.renderList, className)}>RenderList</div>;
}

RenderList.displayName = '@mantine/core/RenderList';
