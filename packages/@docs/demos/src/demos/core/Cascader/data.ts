import { CascaderOption } from '@mantine/core';

export const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [
      {
        value: 'jp',
        label: 'Japan',
        children: [
          { value: 'tokyo', label: 'Tokyo' },
          { value: 'osaka', label: 'Osaka' },
          { value: 'kyoto', label: 'Kyoto' },
        ],
      },
      {
        value: 'kr',
        label: 'South Korea',
        children: [
          { value: 'seoul', label: 'Seoul' },
          { value: 'busan', label: 'Busan' },
        ],
      },
    ],
  },
  {
    value: 'europe',
    label: 'Europe',
    children: [
      {
        value: 'fr',
        label: 'France',
        children: [
          { value: 'paris', label: 'Paris' },
          { value: 'lyon', label: 'Lyon' },
        ],
      },
      {
        value: 'de',
        label: 'Germany',
        children: [
          { value: 'berlin', label: 'Berlin' },
          { value: 'munich', label: 'Munich' },
        ],
      },
    ],
  },
  {
    value: 'north-america',
    label: 'North America',
    children: [
      {
        value: 'us',
        label: 'United States',
        children: [
          { value: 'new-york', label: 'New York' },
          { value: 'san-francisco', label: 'San Francisco' },
        ],
      },
      {
        value: 'ca',
        label: 'Canada',
        children: [
          { value: 'toronto', label: 'Toronto' },
          { value: 'vancouver', label: 'Vancouver' },
        ],
      },
    ],
  },
];

export const dataCode = `import { CascaderOption } from '@mantine/core';

export const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [
      {
        value: 'jp',
        label: 'Japan',
        children: [
          { value: 'tokyo', label: 'Tokyo' },
          { value: 'osaka', label: 'Osaka' },
          { value: 'kyoto', label: 'Kyoto' },
        ],
      },
      {
        value: 'kr',
        label: 'South Korea',
        children: [
          { value: 'seoul', label: 'Seoul' },
          { value: 'busan', label: 'Busan' },
        ],
      },
    ],
  },
  {
    value: 'europe',
    label: 'Europe',
    children: [
      {
        value: 'fr',
        label: 'France',
        children: [
          { value: 'paris', label: 'Paris' },
          { value: 'lyon', label: 'Lyon' },
        ],
      },
      {
        value: 'de',
        label: 'Germany',
        children: [
          { value: 'berlin', label: 'Berlin' },
          { value: 'munich', label: 'Munich' },
        ],
      },
    ],
  },
  {
    value: 'north-america',
    label: 'North America',
    children: [
      {
        value: 'us',
        label: 'United States',
        children: [
          { value: 'new-york', label: 'New York' },
          { value: 'san-francisco', label: 'San Francisco' },
        ],
      },
      {
        value: 'ca',
        label: 'Canada',
        children: [
          { value: 'toronto', label: 'Toronto' },
          { value: 'vancouver', label: 'Vancouver' },
        ],
      },
    ],
  },
];`;
