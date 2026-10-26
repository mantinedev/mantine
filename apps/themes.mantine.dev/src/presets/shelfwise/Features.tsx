'use client';

import { useState } from 'react';
import { IconBarcode, IconBell, IconShoppingCart, IconTicket } from '@tabler/icons-react';
import { Badge, Paper, Tabs } from '@mantine/core';
import { features, type FeatureIcon } from './data';
import { SectionHead } from './SectionHead';
import classes from './Features.module.css';

const ICONS: Record<FeatureIcon, typeof IconBell> = {
  scan: IconBarcode,
  bell: IconBell,
  cart: IconShoppingCart,
  ticket: IconTicket,
};

export function Features() {
  const [active, setActive] = useState<string | null>(features[0].value);

  return (
    <section className={classes.section} id="features" aria-labelledby="sw-features-title">
      <SectionHead
        id="sw-features-title"
        title="Built around a real day behind the counter"
        description="From the morning delivery to the evening author event, Shelfwise keeps the stock list right without anyone typing it up."
      />

      <Tabs
        value={active}
        onChange={setActive}
        variant="pills"
        classNames={{
          root: classes.tabs,
          list: classes.list,
          tab: classes.tab,
          tabSection: classes.tabIcon,
          tabLabel: classes.tabLabel,
          panel: classes.panel,
        }}
      >
        <Tabs.List aria-label="Features">
          {features.map((feature) => {
            const Icon = ICONS[feature.icon];
            return (
              <Tabs.Tab
                key={feature.value}
                value={feature.value}
                leftSection={<Icon size={20} stroke={1.8} />}
              >
                <span className={classes.tabTitle}>{feature.label}</span>
                <span className={classes.tabDescription}>{feature.description}</span>
              </Tabs.Tab>
            );
          })}
        </Tabs.List>

        {features.map((feature) => (
          <Tabs.Panel key={feature.value} value={feature.value} aria-live="polite">
            <Paper shadow="md" className={classes.mock}>
              <div className={classes.mockHead}>
                <b>{feature.head}</b>
                <Badge className={classes.pill}>{feature.pill}</Badge>
              </div>
              <ul className={classes.rows}>
                {feature.rows.map((row) => (
                  <li key={row.title} className={classes.row}>
                    <span className={classes.rowTitle}>{row.title}</span>
                    <span className={classes.rowRight} data-ok={row.ok || undefined}>
                      {row.right}
                    </span>
                    <span className={classes.rowSub}>{row.sub}</span>
                  </li>
                ))}
              </ul>
              <div className={classes.mockFoot}>
                <span>{feature.foot[0]}</span>
                <span>{feature.foot[1]}</span>
              </div>
            </Paper>
          </Tabs.Panel>
        ))}
      </Tabs>
    </section>
  );
}
