import { UnstyledButton } from '@mantine/core';
import { type Order, shortDate, weekday } from './data';
import classes from './Views.module.css';

interface CalendarViewProps {
  orders: Order[];
  onOpen: (id: number) => void;
}

interface CalendarItemProps {
  order: Order;
  detail: string;
  onOpen: (id: number) => void;
}

function CalendarItem({ order, detail, onOpen }: CalendarItemProps) {
  return (
    <UnstyledButton className={classes.calItem} onClick={() => onOpen(order.id)}>
      <b>{order.customer}</b>
      <span>{detail}</span>
    </UnstyledButton>
  );
}

const OFFSETS = [-1, 0, 1, 2, 3];

export function CalendarView({ orders, onOpen }: CalendarViewProps) {
  const active = orders.filter((order) => order.stage !== 'pickup');
  const later = active.filter((order) => order.due > 3);

  return (
    <div className={classes.wrap}>
      <div className={classes.calendar}>
        {OFFSETS.map((offset) => {
          const items = active.filter((order) =>
            offset === -1 ? order.due <= -1 : order.due === offset
          );
          return (
            <div key={offset} className={classes.day} data-today={offset === 0 || undefined}>
              <div className={classes.dayHead}>
                <span className={classes.dayName}>{offset === 0 ? 'Today' : weekday(offset)}</span>
                <span className={classes.dayDate}>{shortDate(offset)}</span>
              </div>
              {items.length ? (
                items.map((order) => (
                  <CalendarItem key={order.id} order={order} detail={order.job} onOpen={onOpen} />
                ))
              ) : (
                <span className={classes.nothing}>Nothing due</span>
              )}
            </div>
          );
        })}
        <div className={classes.day}>
          <div className={classes.dayHead}>
            <span className={classes.dayName}>Later</span>
            <span className={classes.dayDate}>From 31 Oct</span>
          </div>
          {later.map((order) => (
            <CalendarItem
              key={order.id}
              order={order}
              detail={`${shortDate(order.due)}, ${order.job}`}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
