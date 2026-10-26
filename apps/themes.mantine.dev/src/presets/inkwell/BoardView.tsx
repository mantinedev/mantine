'use client';

import { useState } from 'react';
import { IconDots, IconSortDescending } from '@tabler/icons-react';
import { ActionIcon, Badge, Menu, UnstyledButton } from '@mantine/core';
import { type Order, STAGES, type StageId } from './data';
import { OrderCard } from './OrderCard';
import classes from './Board.module.css';

export type SortKey = 'due' | 'customer';

interface BoardViewProps {
  orders: Order[];
  activeColumn: StageId;
  onActiveColumnChange: (stage: StageId) => void;
  onOpen: (id: number) => void;
  onMove: (id: number, stage: StageId) => void;
  onSort: (stage: StageId, key: SortKey) => void;
}

export function BoardView({
  orders,
  activeColumn,
  onActiveColumnChange,
  onOpen,
  onMove,
  onSort,
}: BoardViewProps) {
  const [dragId, setDragId] = useState<number | null>(null);
  const [overColumn, setOverColumn] = useState<StageId | null>(null);

  const endDrag = () => {
    setDragId(null);
    setOverColumn(null);
  };

  return (
    <>
      <div className={classes.picker} role="group" aria-label="Show column">
        {STAGES.map((stage) => (
          <UnstyledButton
            key={stage.id}
            className={classes.pill}
            aria-pressed={stage.id === activeColumn}
            onClick={() => onActiveColumnChange(stage.id)}
          >
            {stage.name} <span>{orders.filter((order) => order.stage === stage.id).length}</span>
          </UnstyledButton>
        ))}
      </div>

      <div className={classes.view}>
        <div className={classes.columns}>
          {STAGES.map((stage) => {
            const items = orders.filter((order) => order.stage === stage.id);
            return (
              <section
                key={stage.id}
                className={classes.column}
                data-active={stage.id === activeColumn || undefined}
                data-over={overColumn === stage.id || undefined}
                aria-label={stage.name}
                onDragOver={(event) => {
                  if (dragId === null) {
                    return;
                  }
                  event.preventDefault();
                  event.dataTransfer.dropEffect = 'move';
                  setOverColumn(stage.id);
                }}
                onDragLeave={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setOverColumn((current) => (current === stage.id ? null : current));
                  }
                }}
                onDrop={(event) => {
                  if (dragId === null) {
                    return;
                  }
                  event.preventDefault();
                  const id = dragId;
                  endDrag();
                  onMove(id, stage.id);
                }}
              >
                <div className={classes.columnHead}>
                  <span className={classes.columnName}>
                    {stage.id === 'press' && (
                      <svg viewBox="0 0 24 24" aria-hidden="true" className={classes.registration}>
                        <circle cx="12" cy="12" r="6" />
                        <path d="M12 2v20M2 12h20" />
                      </svg>
                    )}
                    {stage.name}
                  </span>
                  <Badge className={classes.count}>{items.length}</Badge>
                  <span className={classes.grow} />
                  <Menu>
                    <Menu.Target>
                      <ActionIcon
                        variant="subtle"
                        size={30}
                        aria-label={`${stage.name} column options`}
                      >
                        <IconDots size={18} stroke={1.9} />
                      </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item
                        leftSection={<IconSortDescending size={16} stroke={1.9} />}
                        onClick={() => onSort(stage.id, 'due')}
                      >
                        Sort by due date
                      </Menu.Item>
                      <Menu.Item
                        leftSection={<IconSortDescending size={16} stroke={1.9} />}
                        onClick={() => onSort(stage.id, 'customer')}
                      >
                        Sort by customer
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </div>

                <ul className={classes.cards}>
                  {items.length ? (
                    items.map((order) => (
                      <li key={order.id}>
                        <OrderCard
                          order={order}
                          dragging={dragId === order.id}
                          onOpen={onOpen}
                          onMove={onMove}
                          onDragStart={setDragId}
                          onDragEnd={endDrag}
                        />
                      </li>
                    ))
                  ) : (
                    <li className={classes.empty}>Drop an order here</li>
                  )}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
