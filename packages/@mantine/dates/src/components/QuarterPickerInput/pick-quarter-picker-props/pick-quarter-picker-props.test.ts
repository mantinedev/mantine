import { pickQuarterPickerProps } from './pick-quarter-picker-props';

describe('@mantine/dates/pick-quarter-picker-props', () => {
  it('splits picker props from input props', () => {
    const { pickerProps, others } = pickQuarterPickerProps({
      quartersListFormat: '[Q]Q',
      maxLevel: 'year',
      minDate: '2026-01-01',
      label: 'Pick quarter',
      placeholder: 'Pick quarter',
    });

    expect(pickerProps).toMatchObject({
      quartersListFormat: '[Q]Q',
      maxLevel: 'year',
      minDate: '2026-01-01',
    });
    expect(others).toStrictEqual({ label: 'Pick quarter', placeholder: 'Pick quarter' });
  });
});
