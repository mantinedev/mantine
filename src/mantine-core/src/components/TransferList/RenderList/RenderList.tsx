import React, { useRef, useState } from 'react';
import { DefaultProps, Selectors, MantineNumberSize } from '@mantine/styles';
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
import { groupOptions } from '../../../utils';

export type RenderListStylesNames = Selectors<typeof useStyles>;

export interface RenderListProps extends DefaultProps<RenderListStylesNames> {
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
  radius: MantineNumberSize;
  listComponent?: React.FC<any>;
  limit?: number;
}

const icons = {
  Prev: PrevIcon,
  Next: NextIcon,
  First: FirstIcon,
  Last: LastIcon,
};

const rtlIons = {
  Next: PrevIcon,
  Prev: NextIcon,
  Last: FirstIcon,
  First: LastIcon,
};

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
  radius,
  classNames,
  styles,
  limit,
}: RenderListProps) {
  const { classes, cx, theme } = useStyles(
    { reversed, native: listComponent !== SelectScrollArea, radius },
    { name: 'TransferList', classNames, styles }
  );
  const unGroupedItems: React.ReactElement<any>[] = [];
  const groupedItems: React.ReactElement<any>[] = [];
  const [query, setQuery] = useState('');
  const [hovered, setHovered] = useState(-1);
  const filteredData = data.filter((item) => filter(query, item)).slice(0, limit);
  const ListComponent = listComponent || 'div';
  const Icons = theme.dir === 'rtl' ? rtlIons : icons;

  const itemsRefs = useRef<Record<string, HTMLButtonElement>>({});

  const sortedData: TransferListItem[] = groupOptions({ data: filteredData });

  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
    duration: 0,
    offset: 5,
    cancelable: false,
    isList: true,
  });

  let groupName = null;

  sortedData.forEach((item, index) => {
    const itemComponent = (
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
            itemsRefs.current[item.value] = node;
          }
        }}
      >
        <ItemComponent data={item} selected={selection.includes(item.value)} radius={radius} />
      </UnstyledButton>
    );

    if (!item.group) {
      unGroupedItems.push(itemComponent);
    } else {
      if (groupName !== item.group) {
        groupName = item.group;
        groupedItems.push(
          <div className={classes.separator} key={groupName}>
            <Divider classNames={{ label: classes.separatorLabel }} label={groupName} />
          </div>
        );
      }
      groupedItems.push(itemComponent);
    }
  });

  if (groupedItems.length > 0 && unGroupedItems.length > 0) {
    unGroupedItems.unshift(
      <div className={classes.separator}>
        <Divider classNames={{ label: classes.separatorLabel }} />
      </div>
    );
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
            {reversed ? <Icons.Prev /> : <Icons.Next />}
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
              {reversed ? <Icons.First /> : <Icons.Last />}
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
