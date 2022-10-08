import { groupOptions } from './group-options';

const data = [
  { value: 'ng', label: 'Angular', group: 'Google' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'react', label: 'React', group: 'Facebook' },
  { value: 'vue', label: 'Vue' },
  { value: 'lit', label: 'Lit', group: 'Google' },
];

describe('@mantine/utils/group-options', () => {
  it('returns data sorted according to the insertion order', () => {
    const sortedData = groupOptions({ data });
    expect(sortedData).toHaveLength(data.length);
    expect(sortedData[0]).toBe(data[0]);
    expect(sortedData[1]).toBe(data[4]);
    expect(sortedData[2]).toBe(data[2]);
    expect(sortedData[3]).toBe(data[1]);
    expect(sortedData[4]).toBe(data[3]);
  });
});
