import { useElementSize } from '@mantine/hooks';
import { type Conversation, money } from './data';
import classes from './PriceTrack.module.css';

type PinKind = 'ask' | 'bid' | 'deal';

interface Pin {
  key: string;
  kind: PinKind;
  amount: number;
  label: string;
  old: boolean;
  withTag?: boolean;
}

const TAG_CLEARANCE = 16;
const TICK_CLEARANCE = 56;
const GAP_LABEL_OFFSET = 84;
const GAP_LABEL_CLEARANCE = 50;

interface TrackEntry {
  amount: number;
  label: string;
  state?: string;
}

const isClosed = (state?: string) => state === 'declined' || state === 'superseded';

function getTrack(conversation: Conversation) {
  const { item, offers, agreed, role, name, sold } = conversation;
  const asks: TrackEntry[] = [
    {
      amount: item.price,
      label: `${role === 'selling' ? 'Your price' : 'Listed'} ${money(item.price)}`,
    },
  ];
  const bids: TrackEntry[] = [];

  offers.forEach((offer) => {
    const mine = offer.by === 'me';
    const sellerSide = (role === 'selling' && mine) || (role === 'buying' && !mine);
    const entry = {
      amount: offer.amount,
      label: `${mine ? 'You' : name} ${money(offer.amount)}`,
      state: offer.state,
    };
    (sellerSide ? asks : bids).push(entry);
  });

  const lowAsk = asks
    .filter((ask) => !isClosed(ask.state))
    .reduce((min, ask) => Math.min(min, ask.amount), Infinity);
  const highBid = bids
    .filter((bid) => !isClosed(bid.state))
    .reduce((max, bid) => Math.max(max, bid.amount), -Infinity);

  const pins: Pin[] = [];
  asks.forEach((ask, index) => {
    if (agreed !== null && ask.amount === agreed) {
      return;
    }
    pins.push({
      key: `ask-${index}`,
      kind: 'ask',
      amount: ask.amount,
      label: ask.label,
      old: isClosed(ask.state) || (index === 0 && asks.length > 1),
    });
  });
  bids.forEach((bid, index) => {
    if (agreed !== null && bid.amount === agreed) {
      return;
    }
    pins.push({
      key: `bid-${index}`,
      kind: 'bid',
      amount: bid.amount,
      label: bid.label,
      old: isClosed(bid.state),
    });
  });

  let summary: string;
  let gap: { from: number; to: number } | null = null;

  if (agreed !== null) {
    pins.push({
      key: 'deal',
      kind: 'deal',
      amount: agreed,
      label: `Agreed ${money(agreed)}`,
      old: false,
    });
    const under = item.price - agreed;
    summary = sold
      ? `Sold for ${money(agreed)}`
      : `Deal at ${money(agreed)}, ${under > 0 ? `${money(under)} under asking` : 'full price'}`;
  } else if (Number.isFinite(highBid) && Number.isFinite(lowAsk) && lowAsk > highBid) {
    gap = { from: highBid, to: lowAsk };
    summary = `${money(lowAsk - highBid)} between you`;
  } else {
    summary = sold ? 'Sold to someone else' : 'No offers yet';
  }

  return { pins, gap, summary };
}

function placeTags(pins: Pin[], position: (value: number) => number) {
  const placed: Pin[] = [];
  const ordered = [...pins].sort((a, b) => Number(a.old) - Number(b.old));
  ordered.forEach((pin) => {
    const up = pin.kind === 'ask';
    const collides = placed.some(
      (other) =>
        (other.kind === 'ask') === up &&
        Math.abs(position(other.amount) - position(pin.amount)) < TAG_CLEARANCE
    );
    pin.withTag = !pin.old || !collides;
    if (pin.withTag) {
      placed.push(pin);
    }
  });
  return pins;
}

interface PriceTrackProps {
  conversation: Conversation;
}

export function PriceTrack({ conversation }: PriceTrackProps) {
  const { ref, width } = useElementSize();
  const { min, max } = conversation.item;
  const position = (value: number) => ((value - min) / (max - min)) * 100;
  const track = getTrack(conversation);
  const { gap, summary } = track;
  const pins = placeTags(track.pins, position);
  const step = max - min <= 50 ? 5 : 10;
  const ticks: number[] = [];
  for (let value = min; value <= max; value += step) {
    ticks.push(value);
  }
  const lowerTags = pins.filter((pin) => pin.kind !== 'ask' && pin.withTag);
  const nearLowerTag = (value: number) =>
    width > 0 &&
    lowerTags.some(
      (pin) => (Math.abs(position(pin.amount) - position(value)) * width) / 100 < TICK_CLEARANCE
    );
  const gapLabelPosition = gap
    ? Math.max(
        (position(gap.from) + position(gap.to)) / 2,
        width > 0 ? position(gap.from) + (GAP_LABEL_OFFSET / width) * 100 : 0
      )
    : null;
  const nearGapLabel = (value: number) =>
    width > 0 &&
    gapLabelPosition !== null &&
    (Math.abs(gapLabelPosition - position(value)) * width) / 100 < GAP_LABEL_CLEARANCE;

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <b>Price talk</b>
        <span>{summary}</span>
      </div>
      <div
        ref={ref}
        className={classes.track}
        role="img"
        aria-label={`Price track from ${money(min)} to ${money(max)}. ${summary}`}
      >
        <span className={classes.rail} />
        {ticks.map((value) => {
          const labelled = (value - min) % (step * 2) === 0;
          const covered =
            (gap !== null && value > gap.from && value < gap.to) ||
            nearLowerTag(value) ||
            nearGapLabel(value);
          return (
            <span key={value} className={classes.tick} style={{ left: `${position(value)}%` }}>
              {labelled && !covered && <span>{money(value)}</span>}
            </span>
          );
        })}
        <span
          className={classes.gap}
          data-hidden={gap === null || undefined}
          style={
            gap
              ? {
                  left: `${position(gap.from)}%`,
                  width: `${position(gap.to) - position(gap.from)}%`,
                }
              : undefined
          }
        />
        {gap && (
          <span className={classes.gapLabel} style={{ left: `${gapLabelPosition}%` }}>
            {money(gap.to - gap.from)} apart
          </span>
        )}
        {pins.map((pin) => (
          <span
            key={pin.key}
            className={classes.pin}
            data-kind={pin.kind}
            data-old={pin.old || undefined}
            style={{ left: `${position(pin.amount)}%` }}
          >
            <span className={classes.tag} data-hidden={!pin.withTag || undefined}>
              {pin.label}
            </span>
            <span className={classes.stem} />
            <span className={classes.dot} />
          </span>
        ))}
      </div>
    </div>
  );
}
