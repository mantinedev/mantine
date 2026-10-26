'use client';

import { IconArrowRight, IconCheck, IconMail } from '@tabler/icons-react';
import { Button, Checkbox, Drawer, ScrollArea, Switch, Text, Title } from '@mantine/core';
import { DueChip, InkList, PersonAvatar, StageTag } from './Chips';
import { type Order, PEOPLE, STAGES, type StageId } from './data';
import classes from './OrderDrawer.module.css';

interface OrderDrawerProps {
  order: Order | undefined;
  opened: boolean;
  onClose: () => void;
  onMove: (id: number, stage: StageId) => void;
  onApprove: (id: number, approved: boolean) => void;
  onChecklist: (id: number, index: number, done: boolean) => void;
  onEmail: (order: Order) => void;
  onCollected: (order: Order) => void;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <Title order={3} className={classes.sectionTitle}>
        {title}
      </Title>
      {children}
    </div>
  );
}

export function OrderDrawer({
  order,
  opened,
  onClose,
  onMove,
  onApprove,
  onChecklist,
  onEmail,
  onCollected,
}: OrderDrawerProps) {
  const index = order ? STAGES.findIndex((stage) => stage.id === order.stage) : -1;
  const next = STAGES[index + 1];

  return (
    <Drawer.Root
      opened={opened}
      onClose={onClose}
      position="right"
      withinPortal={false}
      lockScroll={false}
      classNames={{ panel: classes.panel, content: classes.content }}
    >
      <Drawer.Overlay className={classes.overlay} />
      <Drawer.Content aria-labelledby="inkwell-drawer-title">
        {order && (
          <>
            <Drawer.Header className={classes.header}>
              <div className={classes.headText}>
                <StageTag>{STAGES[index].name}</StageTag>
                <Drawer.Title component="h2" id="inkwell-drawer-title" className={classes.title}>
                  {order.customer}
                </Drawer.Title>
                <Text size="sm" mt="3xs">
                  {order.job}
                </Text>
              </div>
              <Drawer.CloseButton aria-label="Close" />
            </Drawer.Header>

            <ScrollArea className={classes.bodyScroll} scrollbars="y">
              <Drawer.Body className={classes.body}>
                {order.stage === 'proof' && (
                  <div className={classes.approval}>
                    <div>
                      <b>Customer approved the proof</b>
                      <span>
                        {order.approved ? 'Ready to go on press' : 'Waiting for a reply by email'}
                      </span>
                    </div>
                    <Switch
                      checked={!!order.approved}
                      onChange={(event) => onApprove(order.id, event.currentTarget.checked)}
                      aria-label="Customer approved the proof"
                    />
                  </div>
                )}

                <Section title="Job">
                  <dl className={classes.specs}>
                    {[
                      ['Quantity', order.qty],
                      ['Paper', order.stock],
                      ['Size', order.size],
                      ['Finish', order.finish],
                      ['Price', order.price],
                      ['Assigned to', PEOPLE[order.who].name],
                    ].map(([term, value]) => (
                      <div key={term}>
                        <dt>{term}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </Section>

                <Section title="Inks">
                  <InkList inks={order.inks} />
                </Section>

                <Section title="Due">
                  <DueChip order={order} />
                </Section>

                <Section title="Checklist">
                  <ul className={classes.checklist}>
                    {order.checklist.map((item, itemIndex) => (
                      <li key={item.label}>
                        <Checkbox
                          label={item.label}
                          checked={item.done}
                          className={
                            item.done ? `${classes.checkItem} ${classes.done}` : classes.checkItem
                          }
                          onChange={(event) =>
                            onChecklist(order.id, itemIndex, event.currentTarget.checked)
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section title="Activity">
                  <ul className={classes.log}>
                    {order.log.map((entry, entryIndex) => (
                      <li key={entryIndex}>
                        <PersonAvatar who={order.who} />
                        <div>
                          <b>{entry.text}</b>
                          <span>{entry.when}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Section>
              </Drawer.Body>
            </ScrollArea>

            <Drawer.Footer className={classes.footer}>
              <Button
                variant="default"
                leftSection={<IconMail size={17} stroke={2.2} />}
                onClick={() => onEmail(order)}
              >
                Email customer
              </Button>
              {next ? (
                <Button
                  rightSection={<IconArrowRight size={17} stroke={2.2} />}
                  onClick={() => onMove(order.id, next.id)}
                >
                  Move to {next.name.toLowerCase()}
                </Button>
              ) : (
                <Button
                  leftSection={<IconCheck size={17} stroke={2.2} />}
                  onClick={() => onCollected(order)}
                >
                  Mark as collected
                </Button>
              )}
            </Drawer.Footer>
          </>
        )}
      </Drawer.Content>
    </Drawer.Root>
  );
}
