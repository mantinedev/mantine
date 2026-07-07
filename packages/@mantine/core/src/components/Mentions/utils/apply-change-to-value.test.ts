import { applyChangeToValue, MentionsSelection } from './apply-change-to-value';
import { getPlainText } from './get-plain-text';
import { createTestConfig } from './test-helpers';

const configs = [createTestConfig('@')];

function selection(
  selectionStartBefore: number,
  selectionEndBefore: number,
  selectionEndAfter: number
): MentionsSelection {
  return { selectionStartBefore, selectionEndBefore, selectionEndAfter };
}

describe('@mantine/core/Mentions/apply-change-to-value', () => {
  it('inserts plain text after a mention', () => {
    const value = 'Hey @[Walter White](walter)';
    const result = applyChangeToValue(value, 'Hey @Walter White!', selection(17, 17, 18), configs);
    expect(result.value).toBe('Hey @[Walter White](walter)!');
    expect(result.removedMention).toBe(false);
    expect(getPlainText(result.value, configs)).toBe('Hey @Walter White!');
  });

  it('inserts plain text before a mention', () => {
    const value = '@[Walter White](walter)';
    const result = applyChangeToValue(value, 'hi @Walter White', selection(0, 0, 3), configs);
    expect(result.value).toBe('hi @[Walter White](walter)');
    expect(result.removedMention).toBe(false);
  });

  it('inserts plain text between two mentions', () => {
    const value = '@[A](a)@[B](b)';
    const result = applyChangeToValue(value, '@Ax@B', selection(2, 2, 3), configs);
    expect(result.value).toBe('@[A](a)x@[B](b)');
    expect(result.removedMention).toBe(false);
  });

  it('removes the whole mention when part of it is deleted (atomic delete)', () => {
    const value = 'Hey @[Walter White](walter)';
    const result = applyChangeToValue(value, 'Hey @Walter Whit', selection(17, 17, 16), configs);
    expect(result.value).toBe('Hey ');
    expect(result.removedMention).toBe(true);
    expect(getPlainText(result.value, configs)).toBe('Hey ');
  });

  it('removes a mention selected and deleted entirely', () => {
    const value = 'a @[Bob](bob) c';
    const result = applyChangeToValue(value, 'a  c', selection(2, 6, 2), configs);
    expect(result.value).toBe('a  c');
    expect(result.removedMention).toBe(true);
  });

  it('handles a paste that replaces a selection spanning a mention', () => {
    const value = 'Hey @[Walter White](walter) there';
    const result = applyChangeToValue(value, 'Hey everyone there', selection(4, 17, 12), configs);
    expect(result.value).toBe('Hey everyone there');
    expect(result.removedMention).toBe(true);
  });

  it('supports multi-source configs', () => {
    const multi = [createTestConfig('@'), createTestConfig('#', '#[__display__](__id__)')];
    const value = '@[A](a) #[B](b)';
    const result = applyChangeToValue(value, '@A #B!', selection(5, 5, 6), multi);
    expect(result.value).toBe('@[A](a) #[B](b)!');
    expect(result.removedMention).toBe(false);
  });

  it('computes the caret position in the new plain text', () => {
    const value = 'Hey @[Walter White](walter)';
    const result = applyChangeToValue(value, 'Hey @Walter White!', selection(17, 17, 18), configs);
    expect(result.caretPlainTextIndex).toBe(18);
  });

  it('clears the value entirely', () => {
    const value = '@[A](a) text';
    const result = applyChangeToValue(value, '', selection(0, 7, 0), configs);
    expect(result.value).toBe('');
    expect(getPlainText(result.value, configs)).toBe('');
  });
});
