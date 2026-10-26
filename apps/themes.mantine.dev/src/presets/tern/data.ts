export const ENDPOINT_HOST = 'https://api.tern.dev';
export const ENDPOINT_PATH = '/v2/forecast/hourly';

export interface NavItem {
  label: string;
  method?: string;
  active?: boolean;
}

export interface NavGroup {
  label: string;
  opened: boolean;
  items: NavItem[];
  endpoints?: NavItem[];
  after?: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    label: 'Getting started',
    opened: true,
    items: [
      { label: 'Introduction' },
      { label: 'Authentication' },
      { label: 'Errors' },
      { label: 'Rate limits' },
    ],
  },
  {
    label: 'Forecasts',
    opened: true,
    items: [{ label: 'Overview' }],
    endpoints: [
      { label: 'Hourly', method: 'GET', active: true },
      { label: 'Daily', method: 'GET' },
      { label: 'Minutely', method: 'GET' },
    ],
    after: [{ label: 'Field reference' }],
  },
  {
    label: 'Historical',
    opened: false,
    items: [
      { label: 'Observations', method: 'GET' },
      { label: 'Growing degree days', method: 'GET' },
    ],
  },
  {
    label: 'Alerts',
    opened: false,
    items: [
      { label: 'Frost alerts', method: 'GET' },
      { label: 'Wind alerts', method: 'GET' },
    ],
  },
  {
    label: 'Webhooks',
    opened: false,
    items: [{ label: 'Subscribe', method: 'POST' }, { label: 'Verify signatures' }],
  },
];

export const sections = [
  { id: 'request', label: 'Request' },
  { id: 'parameters', label: 'Query parameters' },
  { id: 'examples', label: 'Example request' },
  { id: 'response', label: 'Response' },
  { id: 'limits', label: 'Rate limits' },
];

export const samples = [
  {
    fileName: 'curl',
    language: 'bash',
    code: `curl "https://api.tern.dev/v2/forecast/hourly?lat=52.2053&lon=0.1218&hours=24&fields=temp,precip,wind,soil_temp" \\
  -H "Authorization: Bearer $TERN_API_KEY"`,
  },
  {
    fileName: 'JavaScript',
    language: 'js',
    code: `const params = new URLSearchParams({
  lat: '52.2053',
  lon: '0.1218',
  hours: '24',
  fields: 'temp,precip,wind,soil_temp',
});

const res = await fetch(\`https://api.tern.dev/v2/forecast/hourly?\${params}\`, {
  headers: { Authorization: \`Bearer \${process.env.TERN_API_KEY}\` },
});
const forecast = await res.json();`,
  },
  {
    fileName: 'Python',
    language: 'python',
    code: `import os
import requests

res = requests.get(
    "https://api.tern.dev/v2/forecast/hourly",
    params={"lat": 52.2053, "lon": 0.1218, "hours": 24,
            "fields": "temp,precip,wind,soil_temp"},
    headers={"Authorization": f"Bearer {os.environ['TERN_API_KEY']}"},
)
forecast = res.json()`,
  },
];

export const responseJson = `{
  "location": { "lat": 52.2053, "lon": 0.1218, "elevation_m": 14 },
  "units": "metric",
  "issued_at": "2026-10-27T05:00:00Z",
  "hourly": [
    {
      "time": "2026-10-27T06:00:00Z",
      "temp_c": 7.4,
      "precip_mm": 0.2,
      "precip_prob": 0.35,
      "wind_kph": 18.5,
      "wind_dir_deg": 240,
      "soil_temp_c": 9.1
    },
    // 23 more hours
  ]
}`;

export const plans = [
  { plan: 'Free', perMinute: '60', perDay: '1,000', maxHours: '48' },
  { plan: 'Grower', perMinute: '600', perDay: '50,000', maxHours: '240' },
  { plan: 'Fleet', perMinute: '3,000', perDay: 'No limit', maxHours: '240' },
];
