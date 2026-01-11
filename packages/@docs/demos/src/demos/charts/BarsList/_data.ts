export const data = [
  { name: 'Google', value: 1200000 },
  { name: 'Direct', value: 100000 },
  { name: 'Bing', value: 200000 },
  { name: 'Yahoo', value: 20000 },
  { name: 'ChatGPT', value: 1345000 },
  { name: 'Github', value: 100000 },
  { name: 'Yandex', value: 100000 },
];

export const dataCode = `export const data = ${JSON.stringify(data, null, 2)};`;
