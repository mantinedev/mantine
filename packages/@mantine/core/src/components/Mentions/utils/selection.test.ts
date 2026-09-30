import { getSelectionStates } from './selection';
import { createTestConfig } from './test-helpers';
import { walkMentions } from './walk-mentions';

const { spans } = walkMentions('Hi @[Walter White](walter) and @[Jesse](jesse)', [
  createTestConfig('@', '@[__display__](__id__)', (_id, display) => display, false),
]);

describe('@mantine/core/Mentions/selection', () => {
  it('returns inside and boundary states for a collapsed caret', () => {
    expect([...getSelectionStates(spans, 5, 5)]).toEqual([[3, 'inside']]);
    expect([...getSelectionStates(spans, 15, 15)]).toEqual([[3, 'boundary']]);
    expect([...getSelectionStates(spans, 17, 17)]).toEqual([]);
  });

  it('returns full and partial states for a range selection', () => {
    expect([...getSelectionStates(spans, 0, 17)]).toEqual([[3, 'full']]);
    expect([...getSelectionStates(spans, 10, 22)]).toEqual([
      [3, 'partial'],
      [31, 'partial'],
    ]);
  });
});
