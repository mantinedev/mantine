import { transformItems } from './transform-items';

describe('@mantine/core/Combobox/transform-items', () => {
  it('transforms string data', () => {
    expect(transformItems(['apple', 'banana'])).toStrictEqual([
      { label: 'apple', value: 'apple' },
      { label: 'banana', value: 'banana' },
    ]);
  });

  it('transforms partial string data', () => {
    expect(transformItems(['apple', { value: 'orange', label: 'orange' }, 'banana'])).toStrictEqual(
      [
        { label: 'apple', value: 'apple' },
        { value: 'orange', label: 'orange' },
        { label: 'banana', value: 'banana' },
      ]
    );
  });

  it('does not transform data if all options are not strings', () => {
    expect(
      transformItems([
        { label: 'apple', value: 'apple' },
        { value: 'orange', label: 'orange' },
        { label: 'banana', value: 'banana' },
      ])
    ).toStrictEqual([
      { label: 'apple', value: 'apple' },
      { value: 'orange', label: 'orange' },
      { label: 'banana', value: 'banana' },
    ]);
  });
});
