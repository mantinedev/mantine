import { IconFlame, IconMoon, IconSearch, IconSun } from '@tabler/icons-react';
import {
  ActionIcon,
  ScrollArea,
  TextInput,
  ThemeIcon,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { type Ticket, type ViewId, VIEWS } from './data';
import { ChannelIcon, Priority } from './parts';
import { SlaTimer } from './SlaTimer';
import classes from './Queue.module.css';

const CHANNEL_TITLE = { mail: 'Email', chat: 'Chat', phone: 'Phone' };

interface QueueProps {
  tickets: Ticket[];
  view: ViewId;
  onViewChange: (view: ViewId) => void;
  query: string;
  onQueryChange: (query: string) => void;
  selected: number;
  onSelect: (id: number) => void;
  elapsed: number;
}

export function Queue({
  tickets,
  view,
  onViewChange,
  query,
  onQueryChange,
  selected,
  onSelect,
  elapsed,
}: QueueProps) {
  const { toggleColorScheme } = useMantineColorScheme();
  const activeView = VIEWS.find((item) => item.id === view) ?? VIEWS[0];
  const search = query.trim().toLowerCase();
  const list = tickets
    .filter(
      (ticket) =>
        activeView.test(ticket) &&
        (!search || `${ticket.customer} ${ticket.subject}`.toLowerCase().includes(search))
    )
    .sort((a, b) => (a.deadlineIn ?? Infinity) - (b.deadlineIn ?? Infinity));

  return (
    <aside className={classes.root} aria-label="Tickets">
      <div className={classes.top}>
        <div className={classes.brandRow}>
          <span className={classes.brand}>
            <ThemeIcon size={28}>
              <IconFlame size={17} stroke={2} />
            </ThemeIcon>
            Hearth Support
          </span>
          <ActionIcon variant="subtle" onClick={toggleColorScheme} aria-label="Switch color scheme">
            <IconSun size={18} stroke={1.75} className={classes.sun} />
            <IconMoon size={18} stroke={1.75} className={classes.moon} />
          </ActionIcon>
        </div>

        <div className={classes.views} role="group" aria-label="Views">
          {VIEWS.map((item) => (
            <UnstyledButton
              key={item.id}
              className={classes.view}
              aria-pressed={item.id === view}
              onClick={() => onViewChange(item.id)}
            >
              <span className={classes.viewLabel}>{item.label}</span>
              <span className={classes.viewCount}>{tickets.filter(item.test).length}</span>
            </UnstyledButton>
          ))}
        </div>

        <TextInput
          leftSection={<IconSearch size={16} stroke={1.75} />}
          placeholder="Search tickets or customers"
          aria-label="Search tickets"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.currentTarget.value)}
        />
      </div>

      <ScrollArea className={classes.scroll} scrollbarSize={8}>
        <ul className={classes.tickets}>
          {list.length === 0 && (
            <li className={classes.empty}>
              Nothing in this view. Pick another view or clear the search.
            </li>
          )}
          {list.map((ticket) => (
            <li key={ticket.id}>
              <UnstyledButton
                className={classes.ticket}
                aria-current={ticket.id === selected}
                onClick={() => onSelect(ticket.id)}
              >
                <span className={classes.customer}>
                  {ticket.unread && <span className={classes.unread} aria-label="Unread" />}
                  <span className={classes.customerName}>{ticket.customer}</span>
                </span>
                <span className={classes.channel} title={CHANNEL_TITLE[ticket.channel]}>
                  <ChannelIcon channel={ticket.channel} />
                </span>
                <span className={classes.subject}>{ticket.subject}</span>
                <span className={classes.preview}>{ticket.preview}</span>
                <span className={classes.meta}>
                  <Priority priority={ticket.priority} />
                  <SlaTimer ticket={ticket} elapsed={elapsed} />
                </span>
              </UnstyledButton>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </aside>
  );
}
