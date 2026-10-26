'use client';

import { useRef, useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Notification, Transition } from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { PresetProvider } from '@/components/PresetProvider';
import { BoardView, type SortKey } from './BoardView';
import { CalendarView } from './CalendarView';
import {
  initialOrders,
  type Order,
  type PersonId,
  stageName,
  type StageId,
  type ViewId,
} from './data';
import { Header } from './Header';
import { ListView } from './ListView';
import { OrderDrawer } from './OrderDrawer';
import { cssVariablesResolver, theme } from './theme';
import classes from './Inkwell.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&display=swap';

function OrdersBoard() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [view, setView] = useState<ViewId>('board');
  const [people, setPeople] = useState<PersonId[]>([]);
  const [thisWeek, setThisWeek] = useState(false);
  const [stock, setStock] = useState('all');
  const [activeColumn, setActiveColumn] = useState<StageId>('artwork');
  const [openId, setOpenId] = useState<number | null>(null);
  const [drawerOrderId, setDrawerOrderId] = useState<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const timeout = useRef<number>(undefined);

  const showToast = (text: string) => {
    setToast(text);
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => setToast(null), 2600);
  };

  const updateOrder = (id: number, update: (order: Order) => Order) =>
    setOrders((current) => current.map((order) => (order.id === id ? update(order) : order)));

  const visible = orders.filter(
    (order) =>
      (!people.length || people.includes(order.who)) &&
      (!thisWeek || order.due <= 5) &&
      (stock === 'all' || order.stock === stock)
  );

  const result =
    visible.length === orders.length
      ? `${orders.length} open orders`
      : `${visible.length} of ${orders.length} orders shown`;

  const moveOrder = (id: number, stage: StageId) => {
    const order = orders.find((item) => item.id === id);
    if (!order || order.stage === stage) {
      return;
    }
    const name = stageName(stage).toLowerCase();
    updateOrder(id, (item) => ({
      ...item,
      stage,
      due: stage === 'pickup' ? 0 : item.due,
      log: [{ text: `Moved to ${name}`, when: 'Just now, Ruth Ambrose' }, ...item.log],
    }));
    setActiveColumn(stage);
    showToast(`${order.customer} moved to ${name}`);
  };

  const sortColumn = (stage: StageId, key: SortKey) =>
    setOrders((current) => {
      const column = current
        .filter((order) => order.stage === stage)
        .sort((a, b) => (key === 'due' ? a.due - b.due : a.customer.localeCompare(b.customer)));
      return [...current.filter((order) => order.stage !== stage), ...column];
    });

  const openOrder = (id: number) => {
    setOpenId(id);
    setDrawerOrderId(id);
  };

  const approve = (id: number, approved: boolean) =>
    updateOrder(id, (order) => ({
      ...order,
      approved,
      parts: order.parts && {
        ...order.parts,
        done: Math.min(order.parts.total, Math.max(0, order.parts.done + (approved ? 1 : -1))),
      },
      log: [
        {
          text: approved ? 'Proof approved by customer' : 'Proof approval withdrawn',
          when: 'Just now',
        },
        ...order.log,
      ],
    }));

  const toggleChecklist = (id: number, index: number, done: boolean) =>
    updateOrder(id, (order) => ({
      ...order,
      checklist: order.checklist.map((item, itemIndex) =>
        itemIndex === index ? { ...item, done } : item
      ),
    }));

  const collect = (order: Order) => {
    setOpenId(null);
    setOrders((current) => current.filter((item) => item.id !== order.id));
    showToast(`${order.customer} collected their order`);
  };

  return (
    <div className={classes.root}>
      <Header
        view={view}
        onViewChange={setView}
        people={people}
        onTogglePerson={(person) =>
          setPeople((current) =>
            current.includes(person)
              ? current.filter((item) => item !== person)
              : [...current, person]
          )
        }
        thisWeek={thisWeek}
        onThisWeekChange={setThisWeek}
        stock={stock}
        onStockChange={setStock}
        result={result}
        onNewOrder={() => showToast('New order form opens here')}
      />

      {view === 'board' && (
        <BoardView
          orders={visible}
          activeColumn={activeColumn}
          onActiveColumnChange={setActiveColumn}
          onOpen={openOrder}
          onMove={moveOrder}
          onSort={sortColumn}
        />
      )}
      {view === 'list' && <ListView orders={visible} onOpen={openOrder} />}
      {view === 'calendar' && <CalendarView orders={visible} onOpen={openOrder} />}

      <OrderDrawer
        order={orders.find((order) => order.id === drawerOrderId)}
        opened={openId !== null}
        onClose={() => setOpenId(null)}
        onMove={moveOrder}
        onApprove={approve}
        onChecklist={toggleChecklist}
        onEmail={(order) => showToast(`Email to ${order.customer} opens here`)}
        onCollected={collect}
      />

      <Transition mounted={toast !== null} transition="pop" duration={160} keepMounted={false}>
        {(styles) => (
          <div className={classes.toast} style={styles}>
            <Notification
              icon={<IconCheck size={14} stroke={2.6} />}
              color="green"
              withCloseButton={false}
              role="status"
            >
              {toast}
            </Notification>
          </div>
        )}
      </Transition>
    </div>
  );
}

export function Inkwell() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <PresetProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <OrdersBoard />
        </PresetFrame>
      </PresetProvider>
    </>
  );
}
