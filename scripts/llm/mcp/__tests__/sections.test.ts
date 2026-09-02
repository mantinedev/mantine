/** @jest-environment node */
import { sectionSlug, splitSections } from '../sections';

const DOC = `# Button
Package: @mantine/core

Intro paragraph.

## Usage

Usage body.

## Full width

Full width body.

### Nested heading stays inside

More body.
`;

describe('splitSections', () => {
  it('captures everything before the first ## as intro', () => {
    expect(splitSections(DOC).intro).toContain('Intro paragraph.');
    expect(splitSections(DOC).intro).not.toContain('Usage body.');
  });

  it('returns one record per ## heading', () => {
    const { sections } = splitSections(DOC);
    expect(sections.map((s) => s.heading)).toEqual(['Usage', 'Full width']);
  });

  it('keeps ### subheadings inside their parent section', () => {
    const { sections } = splitSections(DOC);
    expect(sections[1].body).toContain('### Nested heading stays inside');
  });

  it('does not treat ## inside a fenced code block as a heading', () => {
    const withFence = [
      '# T',
      '',
      '```md',
      '## Not a heading',
      '```',
      '',
      '## Real',
      '',
      'body',
    ].join('\n');
    expect(splitSections(withFence).sections.map((s) => s.heading)).toEqual(['Real']);
  });

  it('does not close an outer fence on a shorter nested fence of the same character', () => {
    const nestedFence = [
      '# T',
      '',
      '````md',
      'Example:',
      '```',
      '## Not a heading',
      '```',
      '````',
      '',
      '## Real',
      '',
      'body',
    ].join('\n');
    expect(splitSections(nestedFence).sections.map((s) => s.heading)).toEqual(['Real']);
  });

  it('does not close a fence on a marker of a different character', () => {
    const mismatchedFence = [
      '# T',
      '',
      '```md',
      'Example output uses ~~~ for markers:',
      '~~~',
      '## Not a heading',
      '~~~',
      '```',
      '',
      '## Real',
      '',
      'body',
    ].join('\n');
    expect(splitSections(mismatchedFence).sections.map((s) => s.heading)).toEqual(['Real']);
  });

  it('captures a heading whose text starts with #', () => {
    const doc = ['# T', '', '## #1234 fix', '', 'body'].join('\n');
    expect(splitSections(doc).sections.map((s) => s.heading)).toEqual(['#1234 fix']);
  });

  it('handles a document with no sections', () => {
    const { intro, sections } = splitSections('# Only\n\nJust intro.\n');
    expect(sections).toHaveLength(0);
    expect(intro).toContain('Just intro.');
  });
});

describe('sectionSlug', () => {
  it('lowercases and hyphenates', () => {
    expect(sectionSlug('Full width')).toBe('full-width');
    expect(sectionSlug('Sync and async schemas')).toBe('sync-and-async-schemas');
    expect(sectionSlug('zod')).toBe('zod');
  });

  it('strips punctuation and collapses separators', () => {
    expect(sectionSlug('Left and right sections')).toBe('left-and-right-sections');
    expect(sectionSlug('What is `useForm`?')).toBe('what-is-useform');
  });
});
