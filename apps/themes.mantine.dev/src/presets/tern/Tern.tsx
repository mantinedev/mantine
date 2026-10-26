'use client';

import { useRef, useState } from 'react';
import {
  IconActivity,
  IconAlertTriangle,
  IconCheck,
  IconChevronRight,
  IconPencil,
} from '@tabler/icons-react';
import { CodeHighlightAdapterProvider } from '@mantine/code-highlight';
import {
  Alert,
  Badge,
  Breadcrumbs,
  Code,
  Drawer,
  Paper,
  Portal,
  Table,
  TableOfContents,
  Text,
  Title,
  Transition,
} from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { PresetProvider } from '@/components/PresetProvider';
import { ExampleRequest, ResponseSample } from './CodeSamples';
import { plans, sections } from './data';
import { EndpointBar } from './EndpointBar';
import { Feedback } from './Feedback';
import { ternHighlightAdapter } from './highlight-adapter';
import { ParamsTable } from './ParamsTable';
import { SideNav } from './SideNav';
import { cssVariablesResolver, theme } from './theme';
import { TopBar } from './TopBar';
import classes from './Tern.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

function SectionTitle({ id, children }: { id: string; children: string }) {
  return (
    <Title order={2} id={`h-${id}`} className={classes.h2} data-toc={id} data-label={children}>
      {children}
      <a href={`#${id}`} className={classes.anchor} aria-label={`Link to ${children}`}>
        #
      </a>
    </Title>
  );
}

function DocSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={classes.doc} aria-labelledby={`h-${id}`}>
      <SectionTitle id={id}>{title}</SectionTitle>
      {children}
    </section>
  );
}

function Rail() {
  return (
    <aside className={classes.rail} aria-label="On this page">
      <p className={classes.railTitle}>On this page</p>
      <TableOfContents
        initialData={sections.map((section) => ({
          id: section.id,
          value: section.label,
          depth: 1,
        }))}
        scrollSpyOptions={{
          selector: '[data-toc]',
          getDepth: () => 1,
          getValue: (element) => element.dataset.label || '',
          offset: 80,
        }}
        getControlProps={({ data }) => ({
          component: 'a',
          href: `#${data.id?.replace(/^h-/, '')}`,
          children: data.value,
          onClick: (event: React.MouseEvent) => {
            event.preventDefault();
            data.getNode().scrollIntoView({ behavior: 'smooth', block: 'start' });
          },
        })}
      />
      <div className={classes.railExtra}>
        <a href="#" onClick={preventDefault}>
          <IconPencil size={14} stroke={1.75} />
          Suggest an edit
        </a>
        <a href="#" onClick={preventDefault}>
          <IconActivity size={14} stroke={1.75} />
          API status: all systems normal
        </a>
      </div>
    </aside>
  );
}

function Docs() {
  const [navOpened, setNavOpened] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const timeout = useRef<number>(undefined);

  const showToast = (text: string) => {
    setToast(text);
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => setToast(null), 2200);
  };

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => showToast(label),
      () => showToast('Select the text and copy it manually')
    );
  };

  return (
    <div className={classes.root}>
      <TopBar navOpened={navOpened} onNavToggle={() => setNavOpened((o) => !o)} />

      <div className={classes.layout}>
        <SideNav className={classes.sidenav} />

        <main className={classes.content}>
          <Breadcrumbs separator={<IconChevronRight size={14} stroke={1.75} />}>
            <a href="#" onClick={preventDefault}>
              API
            </a>
            <a href="#" onClick={preventDefault}>
              Forecasts
            </a>
            <span aria-current="page">Hourly forecasts</span>
          </Breadcrumbs>
          <Title order={1} className={classes.h1}>
            Hourly forecasts
          </Title>
          <Text size="lg" className={classes.lead}>
            Get temperature, rain, wind and soil conditions for any point on land, hour by hour, up
            to ten days ahead. Most customers use it to plan spraying windows, harvest days and
            delivery routes.
          </Text>
          <div className={classes.metaRow}>
            <Badge variant="dot" radius="xl" color="var(--tern-good)">
              Stable since v2.0
            </Badge>
            <span>Updated 14 October 2026</span>
          </div>

          <DocSection id="request" title="Request">
            <p className={classes.p}>
              Send a <Code>GET</Code> request with the coordinates you want a forecast for.
              Authenticate with your API key in the <Code>Authorization</Code> header.
            </p>
            <EndpointBar onCopy={copy} />
          </DocSection>

          <DocSection id="parameters" title="Query parameters">
            <ParamsTable />
          </DocSection>

          <DocSection id="examples" title="Example request">
            <p className={classes.p}>
              Forecast for a farm near Cambridge, for the next 24 hours, with soil temperature
              added.
            </p>
            <ExampleRequest onCopy={copy} />
          </DocSection>

          <DocSection id="response" title="Response">
            <p className={classes.p}>
              A successful request returns <Code>200 OK</Code> with one object per hour in{' '}
              <Code>hourly</Code>, in time order. Fields you did not ask for are left out.
            </p>
            <ResponseSample onCopy={copy} />
            <ul className={classes.list}>
              <li>
                <Code>precip_prob</Code> is a fraction from 0 to 1, not a percentage.
              </li>
              <li>
                <Code>soil_temp_c</Code> is measured at 10 cm depth.
              </li>
              <li>
                Times are always ISO 8601. When you pass <Code>tz</Code>, they include that zone’s
                offset.
              </li>
            </ul>
          </DocSection>

          <DocSection id="limits" title="Rate limits">
            <Alert
              role="note"
              variant="outline"
              className={classes.callout}
              classNames={{
                title: classes.calloutTitle,
                icon: classes.calloutIcon,
              }}
              icon={<IconAlertTriangle size={20} stroke={1.75} />}
              title="Requests over your limit return 429"
            >
              Wait for the number of seconds in the <Code>Retry-After</Code> header before trying
              again. Forecasts update once an hour, so polling more often than that only uses up
              your quota.
            </Alert>
            <Table.ScrollContainer minWidth={420} className={classes.tableWrap}>
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Plan</Table.Th>
                    <Table.Th ta="right">Per minute</Table.Th>
                    <Table.Th ta="right">Per day</Table.Th>
                    <Table.Th ta="right">Max hours</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {plans.map((row) => (
                    <Table.Tr key={row.plan}>
                      <Table.Td>{row.plan}</Table.Td>
                      <Table.Td className={classes.num}>{row.perMinute}</Table.Td>
                      <Table.Td className={classes.num}>{row.perDay}</Table.Td>
                      <Table.Td className={classes.num}>{row.maxHours}</Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Table.ScrollContainer>
          </DocSection>

          <Feedback />

          <nav className={classes.pager} aria-label="Previous and next page">
            <Paper component="a" href="#" onClick={preventDefault} className={classes.pagerLink}>
              <small>Previous</small>
              <span>Forecasts overview</span>
            </Paper>
            <Paper
              component="a"
              href="#"
              onClick={preventDefault}
              className={classes.pagerLink}
              data-next
            >
              <small>Next</small>
              <span>Daily forecasts</span>
            </Paper>
          </nav>
        </main>

        <Rail />
      </div>

      <Drawer
        opened={navOpened}
        onClose={() => setNavOpened(false)}
        withinPortal={false}
        withCloseButton={false}
        size="min(300px, 86vw)"
        classNames={{ content: classes.drawer, body: classes.drawerBody }}
        overlayProps={{ backgroundOpacity: 0.5, color: '#080b10' }}
      >
        <SideNav />
      </Drawer>

      <Portal>
        <div className={classes.toastAnchor}>
          <Transition mounted={toast !== null} transition="pop" duration={120}>
            {(styles) => (
              <div className={classes.toast} style={styles} role="status">
                <IconCheck size={16} stroke={1.75} />
                {toast}
              </div>
            )}
          </Transition>
        </div>
      </Portal>
    </div>
  );
}

export function Tern() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <PresetProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <CodeHighlightAdapterProvider adapter={ternHighlightAdapter}>
          <PresetFrame>
            <Docs />
          </PresetFrame>
        </CodeHighlightAdapterProvider>
      </PresetProvider>
    </>
  );
}
