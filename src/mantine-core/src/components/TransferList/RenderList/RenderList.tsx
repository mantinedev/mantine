import React, { useState } from 'react';
import { DefaultProps, ClassNames } from '@mantine/styles';
import { UnstyledButton } from '../../Button';
import { ActionIcon } from '../../ActionIcon';
import { TextInput } from '../../TextInput';
import { Text } from '../../Text';
import { LastIcon, NextIcon, FirstIcon, PrevIcon } from '../../Pagination/icons';
import { TransferListItem, TransferListItemComponent } from '../types';
import useStyles from './RenderList.styles';

export type RenderListStylesNames = ClassNames<typeof useStyles>;

interface RenderListProps extends DefaultProps<RenderListStylesNames> {
  data: TransferListItem[];
  onSelect(value: string): void;
  selection: string[];
  itemComponent: TransferListItemComponent;
  searchPlaceholder: string;
  filter(query: string, item: TransferListItem): boolean;
  nothingFound?: React.ReactNode;
  title?: React.ReactNode;
  reversed?: boolean;
  onMoveAll(): void;
  onMove(): void;
  height: number;
  listComponent?: React.FC<any>;
}

export function RenderList({
  className,
  data,
  onSelect,
  selection,
  itemComponent: ItemComponent,
  listComponent,
  searchPlaceholder,
  filter,
  nothingFound,
  title,
  reversed,
  onMoveAll,
  onMove,
  height,
  classNames,
  styles,
}: RenderListProps) {
  const { classes, cx } = useStyles(
    { reversed, height },
    { name: 'TransferList', classNames, styles }
  );
  const [query, setQuery] = useState('');
  const [hovered, setHovered] = useState(-1);
  const filteredData = data.filter((item) => filter(query, item));
  const ListComponent = listComponent || 'div';

  const items = filteredData.map((item, index) => (
    <UnstyledButton
      tabIndex={-1}
      onClick={() => onSelect(item.value)}
      key={item.value}
      onMouseEnter={() => setHovered(index)}
      className={cx(classes.transferListItem, {
        [classes.transferListItemHovered]: index === hovered,
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
    <div className={cx(classes.transferList, className)}>
      {title && (
        <Text weight={500} className={classes.transferListTitle}>
          {title}
        </Text>
      )}

      <div className={classes.transferListBody}>
        <div className={classes.transferListHeader}>
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
            sx={{ flex: 1 }}
            classNames={{ input: classes.transferListSearch }}
          />

          <ActionIcon
            variant="default"
            size={36}
            radius={0}
            className={classes.transferListControl}
            disabled={selection.length === 0}
            onClick={onMove}
          >
            {reversed ? <PrevIcon /> : <NextIcon />}
          </ActionIcon>

          <ActionIcon
            variant="default"
            size={36}
            radius={0}
            className={classes.transferListControl}
            disabled={data.length === 0}
            onClick={onMoveAll}
          >
            {reversed ? <FirstIcon /> : <LastIcon />}
          </ActionIcon>
        </div>

        <ListComponent className={classes.transferListItems} onMouseLeave={() => setHovered(-1)}>
          {items.length > 0 ? (
            items
          ) : (
            <Text color="dimmed" size="sm" align="center" mt="sm">
              {nothingFound}
            </Text>
          )}
        </ListComponent>
      </div>
    </div>
  );
}

RenderList.displayName = '@mantine/core/RenderList';
