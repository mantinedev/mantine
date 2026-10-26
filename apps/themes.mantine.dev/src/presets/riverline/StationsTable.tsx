'use client';

import { useState } from 'react';
import {
  IconChevronLeft,
  IconChevronRight,
  IconDots,
  IconLock,
  IconMapPin,
  IconRoute,
  IconTool,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  Menu,
  Pagination,
  Paper,
  Progress,
  Table,
  Tabs,
  Text,
  TextInput,
  Title,
  VisuallyHidden,
} from '@mantine/core';
import { stations, stationStatus, type StationStatus } from './data';
import classes from './Riverline.module.css';

type Filter = 'all' | StationStatus;

const filters: { value: Filter; label: string; count: number }[] = [
  { value: 'all', label: 'All', count: 412 },
  { value: 'empty', label: 'Empty', count: 14 },
  { value: 'full', label: 'Full', count: 9 },
  { value: 'offline', label: 'Offline', count: 3 },
];

const MENU_ICON = { size: 17, stroke: 1.75 };

export function StationsTable() {
  const [filter, setFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');

  const search = query.trim().toLowerCase();
  const rows = stations.filter(
    (station) =>
      (filter === 'all' || station.status === filter) &&
      (!search || `${station.name} ${station.district}`.toLowerCase().includes(search))
  );

  return (
    <Paper component="section" aria-labelledby="stations-title">
      <div className={classes.tableHead}>
        <div>
          <Title order={2} id="stations-title">
            Stations
          </Title>
          <Text size="sm" mt={4}>
            Bikes docked right now
          </Text>
        </div>
        <TextInput
          type="search"
          placeholder="Filter by name or district"
          aria-label="Filter stations"
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
          className={classes.filter}
        />
      </div>

      <Tabs
        value={filter}
        onChange={(value) => setFilter(value as Filter)}
        className={classes.tabs}
      >
        <Tabs.List className={classes.tabsList}>
          {filters.map((item) => (
            <Tabs.Tab
              key={item.value}
              value={item.value}
              rightSection={<span className={classes.tabCount}>{item.count}</span>}
            >
              {item.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      <Table.ScrollContainer minWidth={640} type="native">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Station</Table.Th>
              <Table.Th>Bikes docked</Table.Th>
              <Table.Th>Last ride</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>
                <VisuallyHidden>Actions</VisuallyHidden>
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.length === 0 && (
              <Table.Tr>
                <Table.Td colSpan={5} className={classes.empty}>
                  No stations match. Clear the filter or pick another status.
                </Table.Td>
              </Table.Tr>
            )}
            {rows.map((station) => (
              <Table.Tr key={station.name}>
                <Table.Td>
                  <div className={classes.stationName}>{station.name}</div>
                  <Text size="sm" className={classes.nowrap}>
                    {station.district}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <div className={classes.fill}>
                    <Progress.Root size={8} className={classes.fillBar} aria-hidden>
                      <Progress.Section value={(station.bikes / station.docks) * 100} />
                      <Progress.Section
                        value={(station.ebikes / station.docks) * 100}
                        className={classes.ebikes}
                      />
                    </Progress.Root>
                    <span className={classes.fillCount}>
                      {station.bikes + station.ebikes}/{station.docks}
                    </span>
                  </div>
                </Table.Td>
                <Table.Td className={classes.nowrap}>{station.lastRide}</Table.Td>
                <Table.Td>
                  <Badge
                    variant="dot"
                    color={stationStatus[station.status].color}
                    className={classes.statusBadge}
                  >
                    {stationStatus[station.status].label}
                  </Badge>
                </Table.Td>
                <Table.Td ta="right">
                  <Menu position="bottom-end">
                    <Menu.Target>
                      <ActionIcon
                        variant="subtle"
                        size="lg"
                        aria-label={`Actions for ${station.name}`}
                      >
                        <IconDots size={20} stroke={1.75} />
                      </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item leftSection={<IconRoute {...MENU_ICON} />}>
                        Add to rebalancing
                      </Menu.Item>
                      <Menu.Item leftSection={<IconMapPin {...MENU_ICON} />}>
                        Open station page
                      </Menu.Item>
                      <Menu.Item leftSection={<IconTool {...MENU_ICON} />}>
                        Report a dock fault
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Item color="red" leftSection={<IconLock {...MENU_ICON} />}>
                        Take station offline
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <div className={classes.cardFoot}>
        <span>
          {filter === 'all' && !search
            ? 'Showing 6 of 412 stations'
            : `${rows.length} ${rows.length === 1 ? 'station' : 'stations'} in this view`}
        </span>
        <Pagination
          total={3}
          withEdges={false}
          aria-label="Pages"
          previousIcon={IconChevronLeft}
          nextIcon={IconChevronRight}
        />
      </div>
    </Paper>
  );
}
