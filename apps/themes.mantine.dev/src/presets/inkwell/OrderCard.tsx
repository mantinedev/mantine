'use client';

import { IconAlertTriangle, IconDots, IconMessage, IconPaperclip } from '@tabler/icons-react';
import { ActionIcon, Menu, Text, UnstyledButton } from '@mantine/core';
import { DueChip, InkList, PersonAvatar } from './Chips';
import { type Order, STAGES, type StageId } from './data';
import classes from './Board.module.css';

interface OrderCardProps {
  order: Order;
  dragging: boolean;
  onOpen: (id: number) => void;
  onMove: (id: number, stage: StageId) => void;
  onDragStart: (id: number) => void;
  onDragEnd: () => void;
}

export function OrderCard({
  order,
  dragging,
  onOpen,
  onMove,
  onDragStart,
  onDragEnd,
}: OrderCardProps) {
  const { parts } = order;
  const details = `${order.job}, ${order.stock}${order.size.includes('mm') ? `, ${order.size}` : ''}`;

  return (
    <article
      className={classes.card}
      data-dragging={dragging || undefined}
      draggable
      aria-label={`${order.customer}, ${order.job}`}
      onDragStart={(event) => {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', String(order.id));
        onDragStart(order.id);
      }}
      onDragEnd={onDragEnd}
      onClick={(event) => {
        const target = event.target as HTMLElement;
        if (event.currentTarget.contains(target) && !target.closest('button')) {
          onOpen(order.id);
        }
      }}
    >
      <div className={classes.cardTop}>
        <UnstyledButton className={classes.cardOpen} onClick={() => onOpen(order.id)}>
          <span className={classes.customer}>{order.customer}</span>
          <span className={classes.job}>{details}</span>
        </UnstyledButton>

        <Menu>
          <Menu.Target>
            <ActionIcon
              variant="subtle"
              size={30}
              aria-label={`Move ${order.customer} to another column`}
            >
              <IconDots size={18} stroke={1.9} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Move to</Menu.Label>
            {STAGES.map((stage) => {
              const current = stage.id === order.stage;
              return (
                <Menu.Item
                  key={stage.id}
                  aria-current={current}
                  rightSection={current ? <Text size="xs">Current</Text> : undefined}
                  onClick={() => onMove(order.id, stage.id)}
                >
                  {stage.name}
                </Menu.Item>
              );
            })}
          </Menu.Dropdown>
        </Menu>
      </div>

      {order.flag && (
        <div className={classes.flag}>
          <IconAlertTriangle size={15} stroke={1.9} />
          {order.flag}
        </div>
      )}

      <InkList inks={order.inks} />

      {parts && (
        <div className={classes.parts}>
          <span>
            {parts.done} of {parts.total} {parts.label}
          </span>
          <div className={classes.partsBar} aria-hidden="true">
            {Array.from({ length: parts.total }, (_, index) => (
              <span key={index} data-on={index < parts.done || undefined} />
            ))}
          </div>
        </div>
      )}

      <div className={classes.cardFoot}>
        <DueChip order={order} />
        <span className={classes.grow} />
        {order.comments > 0 && (
          <span className={classes.meta} title="Comments">
            <IconMessage size={14} stroke={1.9} />
            {order.comments}
          </span>
        )}
        {order.files > 0 && (
          <span className={classes.meta} title="Attachments">
            <IconPaperclip size={14} stroke={1.9} />
            {order.files}
          </span>
        )}
        <PersonAvatar who={order.who} />
      </div>
    </article>
  );
}
