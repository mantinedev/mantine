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
  title?: React.ReactNode;
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
  title,
}: RenderListProps) {
  const { classes, cx } = useStyles();
  const [query, setQuery] = useState('');
  const [hovered, setHovered] = useState(-1);
  const filteredData = data.filter((item) => filter(query, item));

  const items = filteredData.map((item, index) => (
    <UnstyledButton
      tabIndex={withSearch ? -1 : 0}
      onClick={() => onSelect(item.value)}
      key={item.value}
      onMouseEnter={() => setHovered(index)}
      className={cx(classes.renderListItem, {
        [classes.renderListItemHovered]: index === hovered,
      })}
    >
      <ItemComponent data={item} selected={selection.includes(item.value)} />
    </UnstyledButton>
  ));

  const handleSearchKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.code) {
      case 'Enter': {
        if (filteredData[hovered]) {
          event.preventDefault();
          onSelect(filteredData[hovered].value);
        }
        break;
      }

      case 'ArrowDown': {
        event.preventDefault();
        setHovered((current) => (current < filteredData.length - 1 ? current + 1 : current));
        break;
      }

      case 'ArrowUp': {
        event.preventDefault();
        setHovered((current) => (current > 0 ? current - 1 : current));
      }
    }
  };

  return (
    <div className={cx(classes.renderList, className)}>
      {title && (
        <Text weight={500} className={classes.renderListTitle}>
          {title}
        </Text>
      )}

      <div className={classes.renderListBody}>
        {withSearch && (
          <TextInput
            value={query}
            onChange={(event) => {
              setQuery(event.currentTarget.value);
              setHovered(0);
            }}
            onFocus={() => setHovered(0)}
            onBlur={() => setHovered(-1)}
            placeholder={searchPlaceholder}
            radius={0}
            onKeyDown={handleSearchKeydown}
            classNames={{ input: classes.renderListSearch }}
          />
        )}

        <div className={classes.renderListItems} onMouseLeave={() => setHovered(-1)}>
          {items.length > 0 ? (
            items
          ) : (
            <Text color="dimmed" size="sm" align="center">
              {nothingFound}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
}

RenderList.displayName = '@mantine/core/RenderList';
