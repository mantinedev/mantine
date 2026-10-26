import { useState } from 'react';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { ActionIcon, Badge, Button, Paper, Text, Title } from '@mantine/core';
import { type Tier, tiers } from './data';
import fieldwork from './Fieldwork.module.css';
import classes from './Program.module.css';

const formatPrice = (value: number) => `£${value.toLocaleString('en-GB')}`;

interface QuantityProps {
  tier: Tier;
  value: number;
  onChange: (value: number) => void;
}

function Quantity({ tier, value, onChange }: QuantityProps) {
  const max = tier.max ?? 0;
  return (
    <span className={classes.quantity} role="group" aria-label={`${tier.name} tickets`}>
      <ActionIcon
        variant="subtle"
        size={38}
        radius={0}
        aria-label="One fewer"
        disabled={value === 0}
        onClick={() => onChange(Math.max(0, value - 1))}
      >
        <IconMinus size={20} stroke={1.9} />
      </ActionIcon>
      <output aria-live="polite">{value}</output>
      <ActionIcon
        variant="subtle"
        size={38}
        radius={0}
        aria-label="One more"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <IconPlus size={20} stroke={1.9} />
      </ActionIcon>
    </span>
  );
}

interface TicketsProps {
  onCheckout: () => void;
}

export function Tickets({ onCheckout }: TicketsProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    standard: 0,
    public: 1,
    student: 0,
  });

  const lines = tiers.filter((tier) => !tier.soldOut && (quantities[tier.id] ?? 0) > 0);
  const total = lines.reduce((sum, tier) => sum + tier.price * quantities[tier.id], 0);

  return (
    <section
      className={`${fieldwork.block} ${fieldwork.wrap} ${fieldwork.ticketsBlock}`}
      id="tickets"
      aria-labelledby="fw-tickets-title"
    >
      <div className={fieldwork.sectionHead}>
        <div>
          <Title order={2} id="fw-tickets-title" className={fieldwork.sectionTitle}>
            Tickets
          </Title>
          <Text className={fieldwork.sectionLead}>
            Every ticket covers both days, lunch, and the Thursday evening social. Prices include
            VAT.
          </Text>
        </div>
      </div>

      <div className={classes.ticketsGrid}>
        <div className={classes.tiers}>
          {tiers.map((tier) =>
            tier.soldOut ? (
              <div key={tier.id} className={`${classes.tier} ${classes.tierSold}`}>
                <Title order={3} className={classes.tierName}>
                  {tier.name}
                </Title>
                <span className={classes.price}>{formatPrice(tier.price)}</span>
                <span className={classes.qty}>
                  <Badge>Sold out</Badge>
                </span>
                <span className={classes.tierDescription}>{tier.description}</span>
              </div>
            ) : (
              <Paper key={tier.id} className={classes.tier}>
                <Title order={3} className={classes.tierName}>
                  {tier.name}
                </Title>
                <span className={classes.price}>
                  {tier.was && (
                    <>
                      <s>{formatPrice(tier.was)}</s>{' '}
                    </>
                  )}
                  {formatPrice(tier.price)}
                </span>
                <span className={classes.qty}>
                  <Quantity
                    tier={tier}
                    value={quantities[tier.id] ?? 0}
                    onChange={(value) =>
                      setQuantities((current) => ({ ...current, [tier.id]: value }))
                    }
                  />
                </span>
                <span className={classes.tierDescription}>{tier.description}</span>
              </Paper>
            )
          )}
        </div>

        <Paper component="aside" className={classes.summary} aria-label="Your order">
          <Title order={3} className={classes.tierName}>
            Your order
          </Title>
          <ul className={classes.orderLines}>
            {lines.length === 0 ? (
              <li className={classes.orderNone}>Choose at least one ticket.</li>
            ) : (
              lines.map((tier) => (
                <li key={tier.id}>
                  <span>
                    {quantities[tier.id]} × {tier.name}
                  </span>
                  <span>{formatPrice(tier.price * quantities[tier.id])}</span>
                </li>
              ))
            )}
          </ul>
          <div className={classes.total}>
            <span>Total</span>
            <b>{formatPrice(total)}</b>
          </div>
          <Button fullWidth disabled={total === 0} onClick={onCheckout}>
            Continue to checkout
          </Button>
          <span className={classes.orderNote}>
            You can add attendee names after paying. Tickets can be transferred until 6 May.
          </span>
        </Paper>
      </div>
    </section>
  );
}
