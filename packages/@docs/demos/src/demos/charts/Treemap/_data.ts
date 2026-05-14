export const data = [
  { name: 'USA', value: 400, color: 'indigo.8' },
  { name: 'India', value: 300, color: 'red.8' },
  { name: 'Japan', value: 100, color: 'teal.8' },
  { name: 'Other', value: 200, color: 'gray.8' },
];

export const dataCode = `
export const data = [
  { name: 'USA', value: 400, color: 'indigo.8' },
  { name: 'India', value: 300, color: 'red.8' },
  { name: 'Japan', value: 100, color: 'teal.8' },
  { name: 'Other', value: 200, color: 'gray.8' },
];
`;

export const nestedData = [
  {
    name: 'Frontend',
    color: 'blue.8',
    children: [
      { name: 'React', value: 400 },
      { name: 'Vue', value: 200 },
      { name: 'Angular', value: 150 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.8',
    children: [
      { name: 'Node', value: 300 },
      { name: 'Python', value: 250 },
      { name: 'Go', value: 100 },
    ],
  },
  {
    name: 'Mobile',
    color: 'red.8',
    children: [
      { name: 'React Native', value: 200 },
      { name: 'Flutter', value: 180 },
    ],
  },
];

export const nestedDataCode = `
export const data = [
  {
    name: 'Frontend',
    color: 'blue.8',
    children: [
      { name: 'React', value: 400 },
      { name: 'Vue', value: 200 },
      { name: 'Angular', value: 150 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.8',
    children: [
      { name: 'Node', value: 300 },
      { name: 'Python', value: 250 },
      { name: 'Go', value: 100 },
    ],
  },
  {
    name: 'Mobile',
    color: 'red.8',
    children: [
      { name: 'React Native', value: 200 },
      { name: 'Flutter', value: 180 },
    ],
  },
];
`;
