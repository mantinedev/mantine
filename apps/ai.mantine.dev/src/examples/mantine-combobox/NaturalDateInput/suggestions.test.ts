import { getPresets, getSuggestions } from './suggestions';

// Wednesday, October 28, 2026, noon (local time)
const NOW = new Date(2026, 9, 28, 12, 0);

function labels(query: string) {
  return getSuggestions(query, NOW).map((suggestion) => suggestion.label);
}

describe('getSuggestions', () => {
  it('shows presets for an empty query', () => {
    expect(labels('')).toEqual(['Today', 'Tomorrow', 'Next week', 'End of month']);
  });

  it('resolves presets to their dates', () => {
    expect(getPresets(NOW).map((preset) => preset.date)).toEqual([
      new Date(2026, 9, 28, 23, 59, 59, 999),
      new Date(2026, 9, 29, 23, 59, 59, 999),
      new Date(2026, 10, 2, 23, 59, 59, 999),
      new Date(2026, 9, 31, 23, 59, 59, 999),
    ]);
  });

  it('completes "ne" with next week, next month and next weekdays', () => {
    expect(labels('ne').slice(0, 3)).toEqual(['next week', 'next month', 'next monday']);
  });

  it('completes a number with offsets and times', () => {
    expect(labels('3').slice(0, 3)).toEqual(['in 3 days', 'in 3 weeks', '3pm today']);
  });

  it('completes a weekday and an hour with pm and am times', () => {
    expect(labels('fri 5').slice(0, 2)).toEqual(['friday at 5pm', 'friday at 5am']);
  });

  it('completes an hour with minutes', () => {
    expect(labels('tomorrow 5:3').slice(0, 2)).toEqual([
      'tomorrow at 5:30pm',
      'tomorrow at 5:30am',
    ]);
  });

  it('suggests a 24-hour time for hours after noon', () => {
    expect(labels('tomorrow at 17')).toContain('tomorrow at 17:00');
  });

  it('completes a partial phrase', () => {
    expect(labels('end of m')[0]).toBe('end of month');
  });

  it('puts the typed text first when it is understood', () => {
    expect(labels('mar 5')[0]).toBe('mar 5');
  });

  it('leaves out longer spellings of the typed date', () => {
    expect(labels('mar 5')).not.toContain('march 5');
  });

  it('returns at most five suggestions', () => {
    expect(labels('n')).toHaveLength(5);
  });

  it('resolves every suggestion to its date', () => {
    const [first] = getSuggestions('fri 5', NOW);
    expect(first.date).toEqual(new Date(2026, 9, 30, 17, 0));
  });

  it('returns nothing for text that is not a date', () => {
    expect(labels('qwerty')).toEqual([]);
  });
});
