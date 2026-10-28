import { icons, type Icon } from '@tabler/icons-react';
import { buildIconSet, getIconLabel, searchIcons } from './icon-data';

const iconSet = buildIconSet(icons as Record<string, Icon>);
const names = (query: string, style: 'outline' | 'filled' = 'outline') =>
  searchIcons(iconSet[style], query).map((entry) => entry.name);

describe('icon names', () => {
  it('splits the name into words for display', () => {
    expect(getIconLabel('ArrowBigLeft')).toBe('Arrow big left');
  });

  it('keeps abbreviations and numbers as separate words', () => {
    expect(getIconLabel('ABOff')).toBe('AB off');
    expect(getIconLabel('CircleNumber1')).toBe('Circle number 1');
  });
});

describe('icon sets', () => {
  it('lists filled icons only when they have a filled version', () => {
    const filledNames = iconSet.filled.map((entry) => entry.name);
    expect(filledNames).toContain('ArrowBigLeft');
    expect(filledNames).not.toContain('ArrowLeft');
  });

  it('names filled icons without the Filled suffix', () => {
    expect(iconSet.filled.some((entry) => entry.name.endsWith('Filled'))).toBe(false);
  });
});

describe('search', () => {
  it('matches every word of the query against the words of the name', () => {
    expect(names('arrow left')).toEqual(expect.arrayContaining(['ArrowLeft', 'ArrowBigLeft']));
  });

  it('ignores the case of the query', () => {
    expect(names('ARROW Left')).toEqual(names('arrow left'));
  });

  it('matches the beginnings of words', () => {
    expect(names('arr lef')).toContain('ArrowBigLeft');
  });

  it('does not match letters in the middle of a word', () => {
    expect(names('ocket')).not.toContain('Rocket');
  });

  it('lists names that start with the query first', () => {
    const results = names('arrow left');
    const firstOther = results.findIndex((name) => !name.startsWith('ArrowLeft'));

    expect(results[0]).toBe('ArrowLeft');
    expect(results.slice(firstOther).some((name) => name.startsWith('ArrowLeft'))).toBe(false);
  });

  it('returns every icon for an empty query', () => {
    expect(names('  ')).toHaveLength(iconSet.outline.length);
  });
});
