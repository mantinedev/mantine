'use client';

import { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Badge, Button, List, Paper, SegmentedControl, Title } from '@mantine/core';
import { plans } from './data';
import { SectionHead } from './SectionHead';
import classes from './Pricing.module.css';

type Billing = 'month' | 'year';

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('month');

  return (
    <section className={classes.section} id="pricing" aria-labelledby="sw-pricing-title">
      <div className={classes.head}>
        <SectionHead
          id="sw-pricing-title"
          title="One price per shop, however many books"
          description="Every plan includes the till app, unlimited titles and support from people who have worked in bookshops."
        />
        <SegmentedControl
          value={billing}
          onChange={(value) => setBilling(value as Billing)}
          aria-label="Billing period"
          data={[
            { value: 'month', label: 'Monthly' },
            {
              value: 'year',
              label: (
                <>
                  Yearly <span className={classes.save}>2 months free</span>
                </>
              ),
            },
          ]}
        />
      </div>

      <div className={classes.plans}>
        {plans.map((plan) => {
          const price = billing === 'month' ? plan.month : Math.round((plan.month * 10) / 12);
          return (
            <Paper
              key={plan.name}
              className={classes.plan}
              data-featured={plan.featured || undefined}
              shadow={plan.featured ? 'md' : undefined}
            >
              {plan.featured && <Badge className={classes.flag}>Most shops choose this</Badge>}
              <div>
                <Title order={3}>{plan.name}</Title>
                <div className={classes.for}>{plan.for}</div>
              </div>
              <div>
                <div className={classes.price}>
                  <b>£{price}</b>
                  <span>a month</span>
                </div>
                <div className={classes.billed}>
                  {billing === 'year'
                    ? `£${plan.month * 10} billed yearly`
                    : 'Billed monthly, plus VAT'}
                </div>
              </div>
              <List
                className={classes.perks}
                classNames={{ item: classes.perk, itemIcon: classes.perkIcon }}
                icon={<IconCheck size={18} stroke={2.4} />}
              >
                {plan.perks.map((perk) => (
                  <List.Item key={perk}>{perk}</List.Item>
                ))}
              </List>
              <Button
                component="a"
                href="#demo"
                variant={plan.featured ? 'filled' : 'default'}
                className={classes.cta}
              >
                Start a 30-day trial
              </Button>
            </Paper>
          );
        })}
      </div>
    </section>
  );
}
