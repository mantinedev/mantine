import React from 'react';
import { DefaultProps, ClassNames } from '@mantine/styles';
import { TransferListItem, TransferListItemComponent } from '../types';
import useStyles from './RenderList.styles';

export type RenderListStylesNames = ClassNames<typeof useStyles>;

interface RenderListProps extends DefaultProps<RenderListStylesNames> {
  data: TransferListItem[];
  onSelect(value: string | string[]): void;
  selection: string[];
  itemComponent: TransferListItemComponent;
}

export function RenderList({
  className,
  data,
  onSelect,
  selection,
  itemComponent: ItemComponent,
}: RenderListProps) {
  const { classes, cx } = useStyles();
  const items = data.map((item) => (
    <ItemComponent
      key={item.value}
      data={item}
      onSelect={() => onSelect(item.value)}
      selected={selection.includes(item.value)}
    />
  ));

  return <div className={cx(classes.renderList, className)}>{items}</div>;
}

RenderList.displayName = '@mantine/core/RenderList';
