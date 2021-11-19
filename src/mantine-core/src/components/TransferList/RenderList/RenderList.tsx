import React, { useState } from 'react';
import { DefaultProps, ClassNames } from '@mantine/styles';
import { UnstyledButton } from '../../Button';
import { TextInput } from '../../TextInput';
import { Text } from '../../Text';
import { TransferListItem, TransferListItemComponent } from '../types';
import useStyles from './RenderList.styles';

export type RenderListStylesNames = ClassNames<typeof useStyles>;

interface RenderListProps extends DefaultProps<RenderListStylesNames> {
  data: TransferListItem[];
  onSelect(value: string | string[]): void;
  selection: string[];
  itemComponent: TransferListItemComponent;
  withSearch: boolean;
  searchPlaceholder: string;
  filter(query: string, item: TransferListItem): boolean;
  nothingFound?: React.ReactNode;
}

export function RenderList({
  className,
  data,
  onSelect,
  selection,
  itemComponent: ItemComponent,
  withSearch,
  searchPlaceholder,
  filter,
  nothingFound,
}: RenderListProps) {
  const { classes, cx } = useStyles();
  const [query, setQuery] = useState('');
  const items = data
    .filter((item) => filter(query, item))
    .map((item) => (
      <UnstyledButton
        onClick={() => onSelect(item.value)}
        key={item.value}
        className={classes.renderListItem}
      >
        <ItemComponent data={item} selected={selection.includes(item.value)} />
      </UnstyledButton>
    ));

  return (
    <div className={cx(classes.renderList, className)}>
      {withSearch && (
        <TextInput
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
          placeholder={searchPlaceholder}
        />
      )}
      {items.length > 0 ? (
        items
      ) : (
        <Text color="dimmed" size="sm" align="center">
          {nothingFound}
        </Text>
      )}
    </div>
  );
}

RenderList.displayName = '@mantine/core/RenderList';
