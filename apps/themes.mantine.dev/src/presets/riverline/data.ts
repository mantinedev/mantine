export const NOW_HOUR = 14;

export const ridesToday = [52, 25, 14, 10, 34, 131, 560, 1460, 1985, 1170, 690, 655, 790, 820];

export const ridesLastWeek = [
  40, 22, 15, 12, 30, 120, 520, 1380, 1890, 1100, 640, 610, 720, 760, 690, 780, 1120, 1720, 2050,
  1480, 920, 610, 380, 170,
];

export const ridesByHour = ridesLastWeek.map((lastWeek, hour) => ({
  hour,
  today: hour < ridesToday.length ? ridesToday[hour] : null,
  lastWeek,
}));

export interface QueueStop {
  id: string;
  name: string;
  meta: string;
  docks: number;
  bikes: number;
  ebikes: number;
  need: string;
  needLabel: string;
}

export const queueStops: QueueStop[] = [
  {
    id: 'lovejoy',
    name: 'NW 13th & Lovejoy',
    meta: 'Empty in about 12 min',
    docks: 19,
    bikes: 1,
    ebikes: 0,
    need: '+10',
    needLabel: 'to drop',
  },
  {
    id: 'water',
    name: 'SE Water & Salmon',
    meta: 'Full since 13:52',
    docks: 23,
    bikes: 18,
    ebikes: 5,
    need: '−9',
    needLabel: 'to collect',
  },
  {
    id: 'union',
    name: 'Union Station',
    meta: 'Empty in about 25 min',
    docks: 27,
    bikes: 2,
    ebikes: 1,
    need: '+12',
    needLabel: 'to drop',
  },
  {
    id: 'williams',
    name: 'N Williams & Fremont',
    meta: 'Full in about 30 min',
    docks: 15,
    bikes: 11,
    ebikes: 2,
    need: '−6',
    needLabel: 'to collect',
  },
];

export type CrewStatus = 'route' | 'done' | 'break';

export interface Crew {
  initials: string;
  name: string;
  van: string;
  done: number;
  total: number;
  status: CrewStatus;
  note?: string;
}

export const crews: Crew[] = [
  {
    initials: 'JR',
    name: 'Jordan Reyes',
    van: 'Van 4, 18 bikes aboard',
    done: 4,
    total: 6,
    status: 'route',
  },
  {
    initials: 'AT',
    name: 'Ana Takahashi',
    van: 'Van 2, 6 bikes aboard',
    done: 5,
    total: 5,
    status: 'done',
  },
  {
    initials: 'DM',
    name: 'Devon Mills',
    van: 'Van 7, 11 bikes aboard',
    done: 2,
    total: 7,
    status: 'route',
  },
  {
    initials: 'SK',
    name: 'Sam Kowalski',
    van: 'Van 3, empty',
    done: 0,
    total: 0,
    status: 'break',
    note: 'Back at 14:45, no stops assigned',
  },
];

export type StationStatus = 'ok' | 'empty' | 'full' | 'offline';

export interface Station {
  name: string;
  district: string;
  docks: number;
  bikes: number;
  ebikes: number;
  lastRide: string;
  status: StationStatus;
}

export const stations: Station[] = [
  {
    name: 'NW 13th & Lovejoy',
    district: 'Pearl District',
    docks: 19,
    bikes: 1,
    ebikes: 0,
    lastRide: '3 min ago',
    status: 'empty',
  },
  {
    name: 'SE Water & Salmon',
    district: 'Central Eastside',
    docks: 23,
    bikes: 18,
    ebikes: 5,
    lastRide: '9 min ago',
    status: 'full',
  },
  {
    name: 'Pioneer Courthouse Square',
    district: 'Downtown',
    docks: 31,
    bikes: 14,
    ebikes: 6,
    lastRide: 'Just now',
    status: 'ok',
  },
  {
    name: 'Union Station',
    district: 'Old Town',
    docks: 27,
    bikes: 2,
    ebikes: 1,
    lastRide: '1 min ago',
    status: 'empty',
  },
  {
    name: 'NE Alberta & 30th',
    district: 'Alberta Arts',
    docks: 15,
    bikes: 7,
    ebikes: 3,
    lastRide: '6 min ago',
    status: 'ok',
  },
  {
    name: 'SE Division & 26th',
    district: 'Richmond',
    docks: 17,
    bikes: 0,
    ebikes: 0,
    lastRide: 'Yesterday',
    status: 'offline',
  },
];

export const stationStatus: Record<StationStatus, { label: string; color: string }> = {
  ok: { label: 'In balance', color: 'green' },
  empty: { label: 'Nearly empty', color: 'red' },
  full: { label: 'Full', color: 'orange' },
  offline: { label: 'Offline', color: 'gray.6' },
};

export const crewStatus: Record<CrewStatus, { label: string; color: string }> = {
  route: { label: 'On route', color: 'var(--mantine-primary-color-filled)' },
  done: { label: 'Route done', color: 'green' },
  break: { label: 'On break', color: 'orange' },
};
