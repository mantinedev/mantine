'use client';

import { useRef, useState } from 'react';
import { IconCheck, IconUpload } from '@tabler/icons-react';
import {
  Button,
  Notification,
  SegmentedControl,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  Transition,
} from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { PresetProvider } from '@/components/PresetProvider';
import { CrewsCard } from './CrewsCard';
import { KpiStrip } from './KpiStrip';
import { RebalancingQueue } from './RebalancingQueue';
import { RidesChart } from './RidesChart';
import { StationsTable } from './StationsTable';
import { cssVariablesResolver, theme } from './theme';
import { TopBar } from './TopBar';
import classes from './Riverline.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Semi+Condensed:wght@500;600;700&display=swap';

function Dashboard() {
  const [selected, setSelected] = useState(['lovejoy', 'water']);
  const [toast, setToast] = useState<string | null>(null);
  const timeout = useRef<number>(undefined);

  const dispatch = () => {
    const count = selected.length;
    setToast(
      `Van 4 (Jordan Reyes) has ${count} new ${count === 1 ? 'stop' : 'stops'} on its route.`
    );
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => setToast(null), 3200);
  };

  return (
    <div className={classes.root}>
      <TopBar />

      <main className={classes.content}>
        <div className={classes.pageHead}>
          <div>
            <Title order={1} className={classes.pageTitle}>
              Network overview
            </Title>
            <Text size="sm" mt={6}>
              Tuesday, October 27. Synced 40 seconds ago.
            </Text>
          </div>
          <div className={classes.headActions}>
            <SegmentedControl data={['Today', '7 days', '30 days']} aria-label="Period" />
            <Button
              variant="default"
              leftSection={<IconUpload size={18} stroke={1.75} />}
              className={classes.export}
            >
              Export
            </Button>
          </div>
        </div>

        <KpiStrip />
        <RidesChart />

        <SimpleGrid type="container" cols={{ base: 1, '900px': 2 }} spacing="lg">
          <RebalancingQueue
            selected={selected}
            onSelectedChange={setSelected}
            onDispatch={dispatch}
          />
          <CrewsCard />
        </SimpleGrid>

        <StationsTable />
      </main>

      <Transition mounted={toast !== null} transition="slide-up" duration={160} keepMounted={false}>
        {(styles) => (
          <Notification
            style={styles}
            className={classes.toast}
            title="Van dispatched"
            icon={
              <ThemeIcon radius="xl" size={24}>
                <IconCheck size={15} stroke={2.5} />
              </ThemeIcon>
            }
            withCloseButton={false}
            role="status"
          >
            {toast}
          </Notification>
        )}
      </Transition>
    </div>
  );
}

export function Riverline() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <PresetProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <Dashboard />
        </PresetFrame>
      </PresetProvider>
    </>
  );
}
