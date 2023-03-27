import React, { useRef, useState } from 'react';
import { DefaultProps, Selectors, MantineNumberSize, rem } from '@mantine/styles';
import { useScrollIntoView } from '@mantine/hooks';
import { groupOptions } from '@mantine/utils';
import { SelectScrollArea } from '../../Select/SelectScrollArea/SelectScrollArea';
import { UnstyledButton } from '../../UnstyledButton';
import { ActionIcon } from '../../ActionIcon';
import { TextInput } from '../../TextInput';
import { Text } from '../../Text';
import { Divider } from '../../Divider';
import {
  PaginationLastIcon,
  PaginationNextIcon,
  PaginationFirstIcon,
  PaginationPreviousIcon,
} from '../../Pagination/Pagination.icons';
import { TransferListItem, TransferListItemComponent } from '../types';
import useStyles from './RenderList.styles';

export type RenderListStylesNames = Selectors<typeof useStyles>;

export interface RenderListProps extends DefaultProps<RenderListStylesNames> {
  variant: string;
  data: TransferListItem[];
  onSelect(value: string): void;
  selection: string[];
  itemComponent: TransferListItemComponent;
  searchPlaceholder: string;
  query?: string;
  onSearch(value: string): void;
  filter(query: string, item: TransferListItem): boolean;
  nothingFound?: React.ReactNode;
  placeholder?: React.ReactNode;
  title?: React.ReactNode;
  reversed?: boolean;
  showTransferAll?: boolean;
  onMoveAll(): void;
  onMove(): void;
  height: number;
  radius: MantineNumberSize;
  listComponent?: React.FC<any>;
  limit?: number;
  transferIcon?: React.FunctionComponent<{ reversed }>;
  transferAllIcon?: React.FunctionComponent<{ reversed }>;
  transferAllMatchingFilter: boolean;
}

const icons = {
  Prev: PaginationPreviousIcon,
  Next: PaginationNextIcon,
  First: PaginationFirstIcon,
  Last: PaginationLastIcon,
};

const rtlIons = {
  Next: PaginationPreviousIcon,
  Prev: PaginationNextIcon,
  Last: PaginationFirstIcon,
  First: PaginationLastIcon,
};

export function RenderList({
  className,
  data,
  onSelect,
  selection,
  itemComponent: ItemComponent,
  listComponent,
  transferIcon: TransferIcon,
  transferAllIcon: TransferAllIcon,
  transferAllMatchingFilter,
  searchPlaceholder,
  query,
  onSearch,
  filter,
  nothingFound,
  placeholder,
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
  unstyled,
  variant,
}: RenderListProps) {
  const { classes, cx, theme } = useStyles(
    { reversed, native: listComponent !== SelectScrollArea, radius },
    { name: 'TransferList', classNames, styles, unstyled, variant }
  );
  const unGroupedItems: React.ReactElement<any>[] = [];
  const groupedItems: React.ReactElement<any>[] = [];
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
        unstyled={unstyled}
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
        <Divider unstyled={unstyled} classNames={{ label: classes.separatorLabel }} />
      </div>
    );
  }

  const handleSearchKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
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

  const transferIcon = reversed ? <Icons.Prev size="1rem" /> : <Icons.Next size="1rem" />;
  const transferAllIcon = reversed ? <Icons.First size="1rem" /> : <Icons.Last size="1rem" />;

  return (
    <div className={cx(classes.transferList, className)}>
      {title && (
        <Text weight={500} unstyled={unstyled} className={classes.transferListTitle}>
          {title}
        </Text>
      )}

      <div className={classes.transferListBody}>
        <div className={classes.transferListHeader}>
          <TextInput
            unstyled={unstyled}
            value={query}
            onChange={(event) => {
              onSearch(event.currentTarget.value);
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
            unstyled={unstyled}
          >
            {TransferIcon ? <TransferIcon reversed={reversed} /> : transferIcon}
          </ActionIcon>

          {showTransferAll && (
            <ActionIcon
              variant="default"
              size={36}
              radius={0}
              className={classes.transferListControl}
              disabled={transferAllMatchingFilter ? filteredData.length === 0 : data.length === 0}
              onClick={onMoveAll}
              unstyled={unstyled}
            >
              {TransferAllIcon ? <TransferAllIcon reversed={reversed} /> : transferAllIcon}
            </ActionIcon>
          )}
        </div>

        <ListComponent
          ref={scrollableRef}
          onMouseLeave={() => setHovered(-1)}
          className={classes.transferListItems}
          style={{ height: rem(height), position: 'relative', overflowX: 'hidden' }}
        >
          {groupedItems.length > 0 || unGroupedItems.length > 0 ? (
            <>
              {groupedItems}
              {unGroupedItems}
            </>
          ) : (
            <Text color="dimmed" unstyled={unstyled} size="sm" align="center" mt="sm">
              {!query && placeholder ? placeholder : nothingFound}
            </Text>
          )}
        </ListComponent>
      </div>
    </div>
  );
}

RenderList.displayName = '@mantine/core/RenderList';
