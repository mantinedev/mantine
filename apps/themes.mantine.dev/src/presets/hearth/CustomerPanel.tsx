import { IconChevronDown, IconX } from '@tabler/icons-react';
import { Accordion, ActionIcon, Badge, Paper, Progress, ScrollArea } from '@mantine/core';
import type { Ticket } from './data';
import { PersonAvatar } from './parts';
import classes from './CustomerPanel.module.css';

interface CustomerPanelProps {
  ticket: Ticket;
  opened: boolean;
  onClose: () => void;
  sections: string[];
  onSectionsChange: (sections: string[]) => void;
}

function SectionTitle({ title, count }: { title: string; count?: number }) {
  return (
    <>
      {title}
      {count !== undefined && <span className={classes.count}>{count}</span>}
    </>
  );
}

export function CustomerPanel({
  ticket,
  opened,
  onClose,
  sections,
  onSectionsChange,
}: CustomerPanelProps) {
  const left = ticket.warranty ? 100 - ticket.warranty.used : 0;

  return (
    <aside
      id="hearth-customer"
      className={classes.root}
      data-opened={opened || undefined}
      aria-label="Customer"
    >
      <ScrollArea className={classes.scroll} scrollbarSize={8}>
        <div className={classes.head}>
          <div className={classes.identity}>
            <PersonAvatar initials={ticket.initials} tone={ticket.tone} size={44} />
            <div className={classes.identityText}>
              <div className={classes.name}>{ticket.customer}</div>
              <div className={classes.mail}>{ticket.email}</div>
            </div>
            <ActionIcon
              variant="subtle"
              className={classes.close}
              onClick={onClose}
              aria-label="Close customer panel"
            >
              <IconX size={18} stroke={1.75} />
            </ActionIcon>
          </div>
          <dl className={classes.facts}>
            <dt>Plan</dt>
            <dd>{ticket.plan}</dd>
            <dt>Customer since</dt>
            <dd>{ticket.since}</dd>
            <dt>Location</dt>
            <dd>{ticket.location}</dd>
            <dt>Spent</dt>
            <dd>{ticket.lifetime}</dd>
          </dl>
        </div>

        <Accordion
          multiple
          value={sections}
          onChange={onSectionsChange}
          chevron={<IconChevronDown size={15} stroke={1.75} />}
          transitionDuration={0}
        >
          <Accordion.Item value="devices">
            <Accordion.Control>
              <SectionTitle title="Devices" count={ticket.devices.length} />
            </Accordion.Control>
            <Accordion.Panel>
              {ticket.devices.length === 0 && (
                <span className={classes.empty}>No devices registered.</span>
              )}
              {ticket.devices.map((device) => (
                <Paper key={device.name} className={classes.device}>
                  <div className={classes.deviceTop}>
                    <span className={classes.deviceName}>{device.name}</span>
                    <span className={classes.state} data-off={device.off || undefined}>
                      {device.state}
                    </span>
                  </div>
                  <div className={classes.deviceMeta}>{device.meta}</div>
                </Paper>
              ))}
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="warranty">
            <Accordion.Control>
              <SectionTitle title="Warranty" />
            </Accordion.Control>
            <Accordion.Panel>
              {ticket.warranty ? (
                <div className={classes.warranty}>
                  <span>
                    Covered until <b>{ticket.warranty.until}</b>
                  </span>
                  <Progress
                    value={left}
                    color="fern"
                    size={6}
                    radius={3}
                    aria-label="Warranty cover left"
                  />
                  <span>{left}% of the 3-year cover left</span>
                </div>
              ) : (
                <span className={classes.empty}>No warranty on file.</span>
              )}
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="history">
            <Accordion.Control>
              <SectionTitle title="Previous tickets" count={ticket.history.length} />
            </Accordion.Control>
            <Accordion.Panel>
              {ticket.history.length === 0 ? (
                <span className={classes.empty}>First ticket from this customer.</span>
              ) : (
                <ul className={classes.history}>
                  {ticket.history.map((item) => (
                    <li key={item.subject}>
                      <span>
                        <span className={classes.historySubject}>{item.subject}</span>
                        <span className={classes.historyDate}>{item.date}</span>
                      </span>
                      <Badge variant="default" size="sm">
                        {item.status}
                      </Badge>
                    </li>
                  ))}
                </ul>
              )}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </ScrollArea>
    </aside>
  );
}
