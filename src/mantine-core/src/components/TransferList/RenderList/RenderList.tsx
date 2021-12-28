import React, { useRef, useState } from 'react';
import { DefaultProps, ClassNames } from '@mantine/styles';
import { useScrollIntoView } from '@mantine/hooks';
import { SelectScrollArea } from '../../Select/SelectScrollArea/SelectScrollArea';
import { UnstyledButton } from '../../Button';
import { ActionIcon } from '../../ActionIcon';
import { TextInput } from '../../TextInput';
import { Text } from '../../Text';
import { Divider } from '../../Divider/Divider';
import { LastIcon, NextIcon, FirstIcon, PrevIcon } from '../../Pagination/icons';
import { TransferListItem, TransferListItemComponent } from '../types';
import useStyles from './RenderList.styles';
import { groupSortData } from '../../../utils/group-sort-data/group-sort-data';

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
  showTransferAll?: boolean;
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
  showTransferAll,
  reversed,
  onMoveAll,
  onMove,
  height,
  classNames,
  styles,
}: RenderListProps) {
  const { classes, cx } = useStyles(
    { reversed, native: listComponent !== SelectScrollArea },
    { name: 'TransferList', classNames, styles }
  );
  const unGroupedItems: React.ReactElement<any>[] = [];
  const groupedItems: React.ReactElement<any>[] = [];
  const [query, setQuery] = useState('');
  const [hovered, setHovered] = useState(-1);
  const filteredData = data.filter((item) => filter(query, item));
  const ListComponent = listComponent || 'div';

  const itemsRefs = useRef<Record<string, HTMLButtonElement>>({});

  const sortedData: TransferListItem[] = groupSortData({ data: filteredData });

  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
    duration: 0,
    offset: 5,
    cancelable: false,
    isList: true,
  });

  const constructItemComponent = (item: TransferListItem, index: number) => (
    <UnstyledButton
      tabIndex={-1}
      onClick={() => onSelect(item.value)}
      key={item.value}
      onMouseEnter={() => setHovered(index)}
      className={cx(classes.transferListItem, {
        [classes.transferListItemHovered]: index === hovered,
      })}
      ref={(node: HTMLButtonElement) => {
        if (itemsRefs && itemsRefs.current) {
          // eslint-disable-next-line no-param-reassign
          itemsRefs.current[item.value] = node;
        }
      }}
    >
      <ItemComponent data={item} selected={selection.includes(item.value)} />
    </UnstyledButton>
  );

  const constructSeparator = (label?: string) => (
    <div className={classes.separator} key={label}>
      <Divider classNames={{ label: classes.separatorLabel }} label={label} />
    </div>
  );

  let groupName = null;
  sortedData.forEach((item, index) => {
    if (!item.group) unGroupedItems.push(constructItemComponent(item, index));
    else {
      if (groupName !== item.group) {
        groupName = item.group;
        groupedItems.push(constructSeparator(groupName));
      }
      groupedItems.push(constructItemComponent(item, index));
    }
  });

  if (groupedItems.length > 0 && unGroupedItems.length > 0) {
    unGroupedItems.unshift(constructSeparator());
  }

  const handleSearchKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.code) {
      case 'Enter': {
        event.preventDefault();
        if (filteredData[hovered]) {
          onSelect(filteredData[hovered].value);
        }
        break;
      }

      case 'ArrowDown': {
        event.preventDefault();
        setHovered((current) => {
          const nextIndex = current < filteredData.length - 1 ? current + 1 : current;

          targetRef.current = itemsRefs.current[filteredData[nextIndex]?.value];

          scrollIntoView({
            alignment: 'end',
          });

          return nextIndex;
        });
        break;
      }

      case 'ArrowUp': {
        event.preventDefault();
        setHovered((current) => {
          const nextIndex = current > 0 ? current - 1 : current;

          targetRef.current = itemsRefs.current[filteredData[nextIndex]?.value];

          scrollIntoView({
            alignment: 'start',
          });

          return nextIndex;
        });
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

          {showTransferAll && (
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
          )}
        </div>

        <ListComponent
          ref={scrollableRef}
          onMouseLeave={() => setHovered(-1)}
          className={classes.transferListItems}
          style={{ height, position: 'relative', overflowX: 'hidden' }}
        >
          {groupedItems.length > 0 || unGroupedItems.length > 0 ? (
            <>
              {groupedItems}
              {unGroupedItems}
            </>
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
