import { getOptionsLockup } from './get-options-lockup';
import { getOptionByLabel } from './get-option-by-label';

const lockup = getOptionsLockup([
  { value: 'de', label: 'Germany' },
  { value: 'am', label: 'Armenia', disabled: true },
  {
    group: 'Asia',
    items: [
      { value: 'jp', label: 'Japan' },
      { value: 'kr', label: 'South Korea' },
    ],
  },
]);

describe('@mantine/core/get-option-by-label', () => {
  it('returns option with the given label', () => {
    expect(getOptionByLabel(lockup, 'Germany')).toStrictEqual({ value: 'de', label: 'Germany' });
  });

  it('returns options that are nested in groups', () => {
    expect(getOptionByLabel(lockup, 'South Korea')).toStrictEqual({
      value: 'kr',
      label: 'South Korea',
    });
  });

  it('ignores label casing and surrounding whitespace', () => {
    expect(getOptionByLabel(lockup, '  gERMANY ')).toStrictEqual({ value: 'de', label: 'Germany' });
  });

  it('returns undefined for disabled options', () => {
    expect(getOptionByLabel(lockup, 'Armenia')).toBeUndefined();
  });

  it('returns undefined if label does not match any option', () => {
    expect(getOptionByLabel(lockup, 'Georgia')).toBeUndefined();
  });

  it('returns undefined when several options share the same label', () => {
    const duplicatesLockup = getOptionsLockup([
      { value: '1', label: 'John Smith' },
      { value: '2', label: 'john smith' },
    ]);

    expect(getOptionByLabel(duplicatesLockup, 'John Smith')).toBeUndefined();
  });

  it('returns the only enabled option when its duplicates are disabled', () => {
    const duplicatesLockup = getOptionsLockup([
      { value: '1', label: 'John Smith', disabled: true },
      { value: '2', label: 'John Smith' },
    ]);

    expect(getOptionByLabel(duplicatesLockup, 'John Smith')).toStrictEqual({
      value: '2',
      label: 'John Smith',
    });
  });

  it('returns undefined for empty and whitespace only labels', () => {
    expect(getOptionByLabel(lockup, '')).toBeUndefined();
    expect(getOptionByLabel(lockup, '   ')).toBeUndefined();
  });
});
