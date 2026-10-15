import { getCurrentTimeFormat } from './get-current-time-format';

describe('@mantine/schedule/get-current-time-format', () => {
  it('keeps a format that includes minutes', () => {
    expect(getCurrentTimeFormat('h:mm A')).toBe('h:mm A');
    expect(getCurrentTimeFormat('HH:mm')).toBe('HH:mm');
  });

  it('adds minutes to an hour-only 12-hour format', () => {
    expect(getCurrentTimeFormat('h A')).toBe('h:mm A');
    expect(getCurrentTimeFormat('ha')).toBe('h:mm A');
  });

  it('adds minutes to an hour-only 24-hour format', () => {
    expect(getCurrentTimeFormat('HH')).toBe('HH:mm');
    expect(getCurrentTimeFormat('H [h]')).toBe('HH:mm');
  });

  it('uses HH:mm for callback formats and when the format is not set', () => {
    expect(getCurrentTimeFormat(() => 'label')).toBe('HH:mm');
    expect(getCurrentTimeFormat(undefined)).toBe('HH:mm');
  });
});
