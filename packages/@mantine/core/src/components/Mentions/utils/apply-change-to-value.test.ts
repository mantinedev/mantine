import { applyChangeToValue, MentionsSelection } from './apply-change-to-value';
import { findMentionOccurrences } from './find-mention-occurrences';
import { getPlainText } from './get-plain-text';
import { normalizeNewlines } from './normalize-newlines';
import { createTestConfig } from './test-helpers';
import type { MentionConfig } from './types';
import { walkMentions } from './walk-mentions';

const configs = [createTestConfig('@')];

function selection(
  selectionStartBefore: number,
  selectionEndBefore: number,
  selectionEndAfter: number
): MentionsSelection {
  return { selectionStartBefore, selectionEndBefore, selectionEndAfter };
}

function apply(
  value: string,
  plainTextValue: string,
  change: MentionsSelection,
  mentionConfigs: MentionConfig[]
) {
  return applyChangeToValue(
    walkMentions(value, mentionConfigs),
    plainTextValue,
    change,
    mentionConfigs
  );
}

describe('@mantine/core/Mentions/apply-change-to-value', () => {
  it('inserts plain text after a mention', () => {
    const value = 'Hey @[Walter White](walter)';
    const result = apply(value, 'Hey @Walter White!', selection(17, 17, 18), configs);
    expect(result.value).toBe('Hey @[Walter White](walter)!');
    expect(result.removedMention).toBe(false);
    expect(getPlainText(result.value, configs)).toBe('Hey @Walter White!');
  });

  it('inserts plain text before a mention', () => {
    const value = '@[Walter White](walter)';
    const result = apply(value, 'hi @Walter White', selection(0, 0, 3), configs);
    expect(result.value).toBe('hi @[Walter White](walter)');
    expect(result.removedMention).toBe(false);
  });

  it('inserts plain text between two mentions', () => {
    const value = '@[A](a)@[B](b)';
    const result = apply(value, '@Ax@B', selection(2, 2, 3), configs);
    expect(result.value).toBe('@[A](a)x@[B](b)');
    expect(result.removedMention).toBe(false);
  });

  it('removes the whole mention when part of it is deleted (atomic delete)', () => {
    const value = 'Hey @[Walter White](walter)';
    const result = apply(value, 'Hey @Walter Whit', selection(17, 17, 16), configs);
    expect(result.value).toBe('Hey ');
    expect(result.removedMention).toBe(true);
    expect(getPlainText(result.value, configs)).toBe('Hey ');
  });

  it('removes a mention selected and deleted entirely', () => {
    const value = 'a @[Bob](bob) c';
    const result = apply(value, 'a  c', selection(2, 6, 2), configs);
    expect(result.value).toBe('a  c');
    expect(result.removedMention).toBe(true);
  });

  it('handles a paste that replaces a selection spanning a mention', () => {
    const value = 'Hey @[Walter White](walter) there';
    const result = apply(value, 'Hey everyone there', selection(4, 17, 12), configs);
    expect(result.value).toBe('Hey everyone there');
    expect(result.removedMention).toBe(true);
  });

  it('supports multi-source configs', () => {
    const multi = [createTestConfig('@'), createTestConfig('#', '#[__display__](__id__)')];
    const value = '@[A](a) #[B](b)';
    const result = apply(value, '@A #B!', selection(5, 5, 6), multi);
    expect(result.value).toBe('@[A](a) #[B](b)!');
    expect(result.removedMention).toBe(false);
  });

  it('computes the caret position in the new plain text', () => {
    const value = 'Hey @[Walter White](walter)';
    const result = apply(value, 'Hey @Walter White!', selection(17, 17, 18), configs);
    expect(result.caretPlainTextIndex).toBe(18);
  });

  it('clears the value entirely', () => {
    const value = '@[A](a) text';
    const result = apply(value, '', selection(0, 7, 0), configs);
    expect(result.value).toBe('');
    expect(getPlainText(result.value, configs)).toBe('');
  });

  it('keeps a mention when the selection before the change is stale', () => {
    const hidden = [createTestConfig('@', '@[__display__](__id__)', (_id, d) => d, false)];
    const value = 'Hi @[Walter White](walter) there';
    const result = apply(value, 'Hi Walter White XYZthere', selection(6, 6, 19), hidden);
    expect(result.value).toBe('Hi @[Walter White](walter) XYZthere');
    expect(getPlainText(result.value, hidden)).toBe('Hi Walter White XYZthere');
    expect(result.removedMention).toBe(false);
    expect(result.caretPlainTextIndex).toBe(19);
  });

  it('computes the caret from the fallback splice', () => {
    const value = 'ab @[A](a) cd';
    const result = apply(value, 'ab @A cXd', selection(0, 0, 7), configs);
    expect(result.value).toBe('ab @[A](a) cXd');
    expect(result.caretPlainTextIndex).toBe(8);
  });

  it('removes the whole mention with the caret at its start on backspace at the mention end', () => {
    const value = 'Hey @[Walter White](walter) there';
    const result = apply(value, 'Hey @Walter Whit there', selection(17, 17, 16), configs);
    expect(result.value).toBe('Hey  there');
    expect(result.removedMention).toBe(true);
    expect(result.caretPlainTextIndex).toBe(4);
  });

  it('removes the whole mention on delete at the mention start when the text around repeats', () => {
    const hidden = [createTestConfig('@', '@[__display__](__id__)', (_id, d) => d, false)];
    const value = '@[bb](1)b';
    const result = apply(value, 'bb', selection(0, 0, 0), hidden);
    expect(result.value).toBe('b');
    expect(result.removedMention).toBe(true);
  });

  it('keeps mentions of a CRLF value normalized before an edit at the end', () => {
    const value = normalizeNewlines('a\r\n@[Walter White](walter)\rb');
    expect(value).toBe('a\n@[Walter White](walter)\nb');
    const plain = getPlainText(value, configs);
    const result = apply(
      value,
      `${plain}x`,
      selection(plain.length, plain.length, plain.length + 1),
      configs
    );
    expect(result.value).toBe('a\n@[Walter White](walter)\nbx');
    expect(findMentionOccurrences(result.value, configs)).toHaveLength(1);
    expect(result.removedMention).toBe(false);
  });
});
