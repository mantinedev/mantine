export const data = [
  { name: 'React', value: 950000 },
  { name: 'Vue', value: 320000 },
  { name: 'Angular', value: 580000 },
  { name: 'Svelte', value: 145000 },
  { name: 'Next.js', value: 720000 },
  { name: 'Nuxt', value: 180000 },
  { name: 'Remix', value: 95000 },
];

export const dataCode = `export const data = ${JSON.stringify(data, null, 2)};`;
