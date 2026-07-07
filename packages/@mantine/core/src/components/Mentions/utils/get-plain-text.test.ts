import { getPlainText } from './get-plain-text';
import { createTestConfig } from './test-helpers';

describe('@mantine/core/Mentions/get-plain-text', () => {
  const configs = [createTestConfig('@')];

  it('renders the trigger and display text of a mention', () => {
    expect(getPlainText('Hey @[Walter White](walter), ready?', configs)).toBe(
      'Hey @Walter White, ready?'
    );
  });

  it('renders the id instead of the display when idOnly is set', () => {
    expect(getPlainText('Hey @[Walter White](walter)', configs, { idOnly: true })).toBe(
      'Hey @walter'
    );
  });

  it('hides the trigger prefix when withTrigger is not set', () => {
    const hidden = [createTestConfig('@', '@[__display__](__id__)', (_id, d) => d, false)];
    expect(getPlainText('Hey @[Walter White](walter)', hidden)).toBe('Hey Walter White');
    expect(getPlainText('Hey @[Walter White](walter)', hidden, { idOnly: true })).toBe(
      'Hey walter'
    );
  });

  it('renders multiple and adjacent mentions', () => {
    expect(getPlainText('@[A](a)@[B](b) c', configs)).toBe('@A@B c');
  });

  it('applies a custom displayTransform', () => {
    const custom = [createTestConfig('@', '@[__display__](__id__)', (id) => id.toUpperCase())];
    expect(getPlainText('hi @[Walter](walter)', custom)).toBe('hi @WALTER');
  });

  it('supports multiple sources with different triggers and markups', () => {
    const multi = [createTestConfig('@'), createTestConfig('#', '#[__display__](__id__)')];
    expect(getPlainText('@[Walter](walter) tagged #[news](1)', multi)).toBe('@Walter tagged #news');
  });

  it('returns the value unchanged when there are no mentions', () => {
    expect(getPlainText('plain text', configs)).toBe('plain text');
  });
});
