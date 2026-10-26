export const saved = [
  { title: 'Repeat orders, September', date: 'Today' },
  { title: 'Refill price test, results', date: 'Yesterday' },
  { title: 'Churned subscribers by region', date: '2 Oct' },
  { title: 'Basket size after free delivery', date: '28 Sep' },
  { title: 'Top refills by margin', date: '19 Sep' },
  { title: 'First-order discount payback', date: '4 Sep' },
];

export interface SourceColumn {
  name: string;
  type: string;
  key?: 'PK' | 'FK';
}

export interface Source {
  name: string;
  rows: string;
  columns: SourceColumn[];
}

export const sources: Source[] = [
  {
    name: 'orders',
    rows: '2,418,903',
    columns: [
      { name: 'id', type: 'INT64', key: 'PK' },
      { name: 'customer_id', type: 'INT64', key: 'FK' },
      { name: 'created_at', type: 'TIMESTAMP' },
      { name: 'total_gbp', type: 'NUMERIC' },
      { name: 'channel', type: 'STRING' },
      { name: 'is_subscription', type: 'BOOL' },
      { name: 'postcode_area', type: 'STRING' },
    ],
  },
  {
    name: 'customers',
    rows: '186,240',
    columns: [
      { name: 'id', type: 'INT64', key: 'PK' },
      { name: 'first_order_at', type: 'TIMESTAMP' },
      { name: 'acquired_via', type: 'STRING' },
      { name: 'region', type: 'STRING' },
      { name: 'marketing_opt_in', type: 'BOOL' },
    ],
  },
  {
    name: 'refills',
    rows: '42',
    columns: [
      { name: 'id', type: 'INT64', key: 'PK' },
      { name: 'name', type: 'STRING' },
      { name: 'size_ml', type: 'INT64' },
      { name: 'price_gbp', type: 'NUMERIC' },
      { name: 'price_changed_at', type: 'DATE' },
    ],
  },
  {
    name: 'subscriptions',
    rows: '61,775',
    columns: [
      { name: 'id', type: 'INT64', key: 'PK' },
      { name: 'customer_id', type: 'INT64', key: 'FK' },
      { name: 'refill_id', type: 'INT64', key: 'FK' },
      { name: 'every_weeks', type: 'INT64' },
      { name: 'status', type: 'STRING' },
      { name: 'next_run_at', type: 'DATE' },
    ],
  },
];

export const FIRST_SQL = `-- Share of orders placed by returning customers, by week
WITH weekly AS (
  SELECT
    date_trunc(o.created_at, WEEK(MONDAY)) AS week,
    countif(o.created_at > c.first_order_at) AS repeat_orders,
    count(*) AS orders
  FROM orders o
  JOIN customers c ON c.id = o.customer_id
  WHERE o.created_at BETWEEN '2025-07-06' AND '2026-10-08'
  GROUP BY week
)
SELECT week, round(100 * repeat_orders / orders, 1) AS repeat_rate
FROM weekly
ORDER BY week;`;

export const STREAM_SQL = `SELECT c.region, count(DISTINCT o.customer_id) AS lapsed
FROM orders o
JOIN customers c ON c.id = o.customer_id
WHERE o.created_at < '2026-09-01'
  AND o.customer_id NOT IN (
    SELECT customer_id FROM orders WHERE created_at >= '2026-09-01'
  )
GROUP BY c.region
ORDER BY lapsed DESC;`;

const WEEKS = [
  '6 Jul',
  '13 Jul',
  '20 Jul',
  '27 Jul',
  '3 Aug',
  '10 Aug',
  '17 Aug',
  '24 Aug',
  '31 Aug',
  '7 Sep',
  '14 Sep',
  '21 Sep',
  '28 Sep',
  '5 Oct',
];
const Y26 = [41.2, 40.8, 41.5, 42.0, 41.1, 40.6, 41.8, 41.3, 38.9, 34.6, 33.4, 33.1, 33.9, 34.4];
const Y25 = [38.6, 38.9, 39.1, 38.8, 39.3, 39.0, 39.5, 39.8, 40.0, 40.3, 40.1, 40.6, 40.8, 41.1];

export const repeatRate = WEEKS.map((week, index) => ({
  week,
  y2026: Y26[index],
  y2025: Y25[index],
}));

export interface RefillRow {
  name: string;
  aug: number;
  sep: number;
  chg: number;
  price: number;
}

export const refills: RefillRow[] = [
  { name: 'Washing-up liquid, 1 L', aug: 2140, sep: 1560, price: 12 },
  { name: 'Laundry liquid, 2 L', aug: 1880, sep: 1610, price: 8 },
  { name: 'Surface spray', aug: 1320, sep: 1290, price: 0 },
  { name: 'Hand soap', aug: 1110, sep: 1060, price: 0 },
  { name: 'Toilet cleaner', aug: 760, sep: 742, price: 0 },
  { name: 'Dishwasher tabs, 30', aug: 690, sep: 512, price: 15 },
  { name: 'Glass cleaner', aug: 410, sep: 398, price: 0 },
  { name: 'Bathroom spray', aug: 380, sep: 371, price: 0 },
].map((row) => ({ ...row, chg: Math.round(((row.sep - row.aug) / row.aug) * 100) }));

export const lapsedByRegion = [
  { region: 'South West', lapsed: 412 },
  { region: 'London', lapsed: 338 },
  { region: 'North West', lapsed: 241 },
  { region: 'Scotland', lapsed: 176 },
  { region: 'Wales', lapsed: 117 },
];

export type RunStatus = 'ok' | 'stop' | 'fail';

export interface HistoryItem {
  id: number;
  query: string;
  time: string;
  status: RunStatus;
}

export const initialHistory: HistoryItem[] = [
  { id: 5, query: 'Repeat orders by refill', time: '1.1 s', status: 'ok' },
  { id: 4, query: 'Repeat rate by week', time: '1.8 s', status: 'ok' },
  { id: 3, query: 'Refill price changes', time: '0.3 s', status: 'ok' },
  { id: 2, query: 'Churn by region, all time', time: '—', status: 'stop' },
  { id: 1, query: 'Basket size, Sept', time: '4.6 s', status: 'fail' },
];

export const suggestions = [
  'Did customers switch to cheaper refills?',
  'Show the same for October',
  'Which postcodes dropped most?',
];

export const AUTO_QUESTION = 'Which customers stopped reordering after the price change?';
export const FOLLOW_UP = 'Break it down by subscription vs one-off orders';
