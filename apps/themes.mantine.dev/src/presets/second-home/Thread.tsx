'use client';

import { useEffect, useRef, useState } from 'react';
import {
  IconArchive,
  IconArrowRight,
  IconBan,
  IconCheck,
  IconChecks,
  IconChevronLeft,
  IconDots,
  IconFlag,
  IconMapPin,
  IconPhoto,
  IconShieldCheck,
  IconTag,
  IconTruck,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Alert,
  Avatar,
  Button,
  Chip,
  Group,
  Image,
  Menu,
  Paper,
  ScrollArea,
  Select,
  Text,
  Textarea,
  Title,
} from '@mantine/core';
import {
  type Conversation,
  type Message,
  money,
  photoUrl,
  PICKUP_DAYS,
  PICKUP_SLOTS,
  QUICK_REPLIES,
} from './data';
import { type CounterState, OfferBubble, type OfferActions } from './Offer';
import { PriceTrack } from './PriceTrack';
import classes from './Thread.module.css';

export interface PickupState {
  day: string;
  slot: string;
}

export interface ThreadActions extends OfferActions {
  onBack: () => void;
  onHideSafety: () => void;
  onMarkSold: () => void;
  onToast: (message: string) => void;
  onArchive: () => void;
  onReport: () => void;
  onBlock: () => void;
  onPickupChange: (pickup: PickupState) => void;
  onSendPickup: () => void;
  onSendText: (text: string) => void;
}

interface ThreadProps {
  conversation: Conversation;
  safetyHidden: boolean;
  counter: CounterState;
  pickup: PickupState;
  actions: ThreadActions;
}

function ItemCard({
  conversation,
  actions,
}: {
  conversation: Conversation;
  actions: ThreadActions;
}) {
  const { item } = conversation;
  const seller = conversation.role === 'selling';

  return (
    <Paper component="article" shadow="md" className={classes.item}>
      <div className={classes.itemTop}>
        <div className={classes.itemPhoto}>
          <Image src={photoUrl(conversation.photo)} alt={item.title} />
          {conversation.sold && <span className={classes.soldStamp}>Sold</span>}
        </div>
        <div className={classes.itemInfo}>
          <div className={classes.itemRow}>
            <span className={classes.itemTitle}>{item.title}</span>
            <span className={classes.itemPrice}>{money(item.price)}</span>
          </div>
          <dl className={classes.facts}>
            <div>
              <dt>Condition</dt>
              <dd>{item.condition}</dd>
            </div>
            <div>
              <dt>Size</dt>
              <dd>{item.size}</dd>
            </div>
            <div>
              <dt>Pickup</dt>
              <dd>{item.area}</dd>
            </div>
          </dl>
          <Group gap="calc(var(--mantine-spacing-sm) * 0.8)" className={classes.itemActions}>
            {seller && !conversation.sold && (
              <Button
                size="xs"
                variant="default"
                leftSection={<IconTag size={18} stroke={1.7} />}
                onClick={actions.onMarkSold}
              >
                Mark as sold
              </Button>
            )}
            <Button
              size="xs"
              variant="default"
              onClick={() => actions.onToast('The listing opens in a new tab')}
            >
              View listing
            </Button>
          </Group>
        </div>
      </div>
      <PriceTrack conversation={conversation} />
    </Paper>
  );
}

interface PickupCardProps {
  conversation: Conversation;
  pickup: PickupState;
  actions: ThreadActions;
}

function PickupCard({ conversation, pickup, actions }: PickupCardProps) {
  return (
    <Paper shadow="md" withBorder className={classes.pickup}>
      <Title order={3} className={classes.pickupTitle}>
        <IconTruck size={20} stroke={1.7} />
        Arrange pickup
      </Title>
      <div>
        <span className={classes.fieldLabel} id="pickup-day">
          Day
        </span>
        <Chip.Group
          value={pickup.day}
          onChange={(day) => actions.onPickupChange({ ...pickup, day })}
        >
          <Group gap="xs" role="radiogroup" aria-labelledby="pickup-day">
            {PICKUP_DAYS.map((day) => (
              <Chip key={day} value={day}>
                {day}
              </Chip>
            ))}
          </Group>
        </Chip.Group>
      </div>
      <Select
        label="Time window"
        data={PICKUP_SLOTS}
        value={pickup.slot}
        onChange={(slot) => slot && actions.onPickupChange({ ...pickup, slot })}
        allowDeselect={false}
        classNames={{ label: classes.fieldLabel }}
      />
      <div className={classes.where}>
        <IconMapPin size={18} stroke={1.7} />
        <span>Hyndland, G12. Your exact address is shared once {conversation.name} confirms.</span>
      </div>
      <Button onClick={actions.onSendPickup}>Send pickup time</Button>
    </Paper>
  );
}

function MessageMeta({ message }: { message: Extract<Message, { kind: 'text' }> }) {
  return (
    <span className={classes.meta} data-seen={message.seen || undefined}>
      {message.time}
      {message.from === 'me' &&
        (message.seen ? (
          <>
            <IconChecks size={15} stroke={2} aria-label="Seen" />
            Seen
          </>
        ) : (
          <IconCheck size={15} stroke={2} aria-label="Sent" />
        ))}
    </span>
  );
}

interface MessageItemProps {
  message: Message;
  conversation: Conversation;
  counter: CounterState;
  pickup: PickupState;
  actions: ThreadActions;
}

function MessageItem({ message, conversation, counter, pickup, actions }: MessageItemProps) {
  switch (message.kind) {
    case 'day':
      return <span className={classes.day}>{message.text}</span>;
    case 'system':
      return (
        <span className={classes.system} data-ok={message.ok || undefined}>
          {message.ok && <IconCheck size={16} stroke={1.7} />}
          {message.text}
        </span>
      );
    case 'offer':
      return (
        <OfferBubble
          conversation={conversation}
          index={message.index}
          note={message.note}
          time={message.time}
          counter={counter}
          actions={actions}
        />
      );
    case 'pickup':
      return <PickupCard conversation={conversation} pickup={pickup} actions={actions} />;
    case 'typing':
      return (
        <span className={classes.typing} aria-label={`${conversation.name} is typing`}>
          <i />
          <i />
          <i />
        </span>
      );
    default:
      return (
        <div className={classes.message} data-from={message.from}>
          {message.photo ? (
            <figure className={classes.photo}>
              <img src={photoUrl(message.photo)} alt={message.text} />
              <figcaption>{message.text}</figcaption>
            </figure>
          ) : (
            <div className={classes.bubble}>{message.text}</div>
          )}
          <MessageMeta message={message} />
        </div>
      );
  }
}

function Composer({
  conversation,
  actions,
}: {
  conversation: Conversation;
  actions: ThreadActions;
}) {
  const [draft, setDraft] = useState('');
  const textarea = useRef<HTMLTextAreaElement>(null);

  const submit = () => {
    const text = draft.trim();
    if (text) {
      actions.onSendText(text);
      setDraft('');
    }
    textarea.current?.focus();
  };

  if (conversation.blocked) {
    return (
      <div className={classes.composerWrap}>
        <div className={classes.blockedNote}>
          You blocked {conversation.name}. Unblock them from the menu to send messages.
        </div>
      </div>
    );
  }

  return (
    <div className={classes.composerWrap}>
      <div className={classes.quick}>
        {QUICK_REPLIES[conversation.role].map((reply) => (
          <Button
            key={reply}
            variant="default"
            size="compact-sm"
            radius={1000}
            className={classes.quickReply}
            onClick={() => actions.onSendText(reply)}
          >
            {reply}
          </Button>
        ))}
      </div>
      <form
        className={classes.composer}
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <ActionIcon
          variant="subtle"
          radius={1000}
          aria-label="Add a photo"
          onClick={() => actions.onToast('Pick a photo from your device')}
        >
          <IconPhoto size={20} stroke={1.7} />
        </ActionIcon>
        <Textarea
          ref={textarea}
          variant="unstyled"
          autosize
          minRows={1}
          maxRows={4}
          value={draft}
          onChange={(event) => setDraft(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              submit();
            }
          }}
          placeholder={`Message ${conversation.name}`}
          aria-label={`Message ${conversation.name}`}
          className={classes.composerField}
          classNames={{ input: classes.composerInput }}
        />
        <ActionIcon type="submit" variant="filled" radius={1000} aria-label="Send">
          <IconArrowRight size={20} stroke={1.7} />
        </ActionIcon>
      </form>
    </div>
  );
}

export function Thread({ conversation, safetyHidden, counter, pickup, actions }: ThreadProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const shown = useRef({ id: '', count: 0 });
  const seller = conversation.role === 'selling';

  useEffect(() => {
    const element = viewport.current;
    if (!element) {
      return;
    }
    const count = conversation.messages.length;
    if (shown.current.id !== conversation.id) {
      element.scrollTop = 0;
    } else if (count > shown.current.count) {
      element.scrollTop = element.scrollHeight;
    }
    shown.current = { id: conversation.id, count };
  }, [conversation.id, conversation.messages.length]);

  return (
    <section className={classes.root} aria-label="Conversation">
      <div className={classes.head}>
        <ActionIcon
          variant="subtle"
          className={classes.back}
          aria-label="Back to messages"
          onClick={actions.onBack}
        >
          <IconChevronLeft size={20} stroke={1.7} />
        </ActionIcon>
        <Avatar>{conversation.initials}</Avatar>
        <span className={classes.who}>
          <b>{conversation.name}</b>
          <span>
            {seller ? 'Buying from you. ' : 'Selling to you. '}
            {conversation.replies}
          </span>
        </span>
        <Menu>
          <Menu.Target>
            <ActionIcon variant="subtle" aria-label="More options">
              <IconDots size={20} stroke={1.7} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconArchive size={18} stroke={1.7} />}
              onClick={actions.onArchive}
            >
              {conversation.archived ? 'Move back to inbox' : 'Archive chat'}
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
              color="red"
              c="var(--mantine-color-red-filled)"
              leftSection={<IconFlag size={18} stroke={1.7} />}
              onClick={actions.onReport}
            >
              Report {conversation.name}
            </Menu.Item>
            <Menu.Item
              color="red"
              c="var(--mantine-color-red-filled)"
              leftSection={<IconBan size={18} stroke={1.7} />}
              onClick={actions.onBlock}
            >
              {conversation.blocked ? 'Unblock' : 'Block'} {conversation.name}
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>

      <ScrollArea className={classes.scroll} viewportRef={viewport}>
        <div className={classes.scrollContent}>
          <ItemCard conversation={conversation} actions={actions} />

          {!safetyHidden && (
            <Alert
              icon={<IconShieldCheck size={20} stroke={1.7} />}
              withCloseButton
              closeButtonLabel="Hide tip"
              onClose={actions.onHideSafety}
              className={classes.safety}
            >
              <Text span fw={600} fz="inherit" className={classes.safetyLead}>
                Meet where you feel safe.
              </Text>{' '}
              Pay when you see the item, and keep the chat here so we can help if something goes
              wrong.
            </Alert>
          )}

          {conversation.messages.map((message, index) => (
            <MessageItem
              key={index}
              message={message}
              conversation={conversation}
              counter={counter}
              pickup={pickup}
              actions={actions}
            />
          ))}
        </div>
      </ScrollArea>

      <Composer key={conversation.id} conversation={conversation} actions={actions} />
    </section>
  );
}
