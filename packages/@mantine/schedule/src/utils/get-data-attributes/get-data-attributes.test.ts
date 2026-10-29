import { getDataAttributes } from './get-data-attributes';

describe('@mantine/schedule/get-data-attributes', () => {
  it('returns data attributes for truthy modifiers only', () => {
    expect(
      getDataAttributes({ 'hour-start': true, static: false, 'drop-target': undefined })
    ).toStrictEqual({ 'data-hour-start': true });
  });
});
