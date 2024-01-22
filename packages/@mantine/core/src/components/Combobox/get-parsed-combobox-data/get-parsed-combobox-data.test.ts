import { getParsedComboboxData } from './get-parsed-combobox-data';

describe('@mantine/core/Combobox/getParsedComboboxData', () => {
  it('returns empty array if data is not provided', () => {
    expect(getParsedComboboxData(undefined)).toStrictEqual([]);
    expect(getParsedComboboxData([])).toStrictEqual([]);
  });

  it('returns parsed objects data', () => {
    expect(
      getParsedComboboxData([
        { value: 'value', label: 'label' },
        { value: 'value-2', label: 'label-2' },
      ])
    ).toStrictEqual([
      { value: 'value', label: 'label' },
      { value: 'value-2', label: 'label-2' },
    ]);
  });

  it('returns parsed string data', () => {
    expect(getParsedComboboxData(['value', 'value-2'])).toStrictEqual([
      { value: 'value', label: 'value' },
      { value: 'value-2', label: 'value-2' },
    ]);
  });

  it('returns parsed groups data', () => {
    expect(
      getParsedComboboxData([
        {
          group: 'group',
          items: [
            { value: 'value', label: 'label' },
            { value: 'value-2', label: 'label-2' },
          ],
        },
      ])
    ).toStrictEqual([
      {
        group: 'group',
        items: [
          { value: 'value', label: 'label' },
          { value: 'value-2', label: 'label-2' },
        ],
      },
    ]);
  });

  it('returns parsed mixed data', () => {
    expect(
      getParsedComboboxData([
        { value: 'value', label: 'label' },
        'value-2',
        {
          group: 'group',
          items: [
            { value: 'value', label: 'label' },
            { value: 'value-2', label: 'label-2' },
          ],
        },
      ])
    ).toStrictEqual([
      { value: 'value', label: 'label' },
      { value: 'value-2', label: 'value-2' },
      {
        group: 'group',
        items: [
          { value: 'value', label: 'label' },
          { value: 'value-2', label: 'label-2' },
        ],
      },
    ]);
  });

  it('parses data with value but without label', () => {
    expect(getParsedComboboxData([{ value: 'value' }])).toStrictEqual([
      { value: 'value', label: 'value', disabled: undefined },
    ]);

    expect(getParsedComboboxData([{ value: 'value', disabled: true }])).toStrictEqual([
      { value: 'value', label: 'value', disabled: true },
    ]);
  });
});
