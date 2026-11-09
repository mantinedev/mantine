import { buildHighlightSegments } from './highlight-segments';
import { Mention } from './Mention';
import { resolveSources } from './resolve-sources';
import { getSelectionStates } from './utils/selection';
import { walkMentions } from './utils/walk-mentions';

const value = 'Hi @[Walter White](walter) and @[Jesse](jesse)';
const sources = resolveSources([
  <Mention key="1" trigger="@" className="mention" style={{ color: 'red' }} />,
]);
const { plainText, spans } = walkMentions(
  value,
  sources.map((source) => source.config)
);

describe('@mantine/core/Mentions/highlight-segments', () => {
  it('builds text and mention segments with plain-text ranges and source styles', () => {
    const segments = buildHighlightSegments(
      plainText,
      spans,
      sources,
      getSelectionStates(spans, 5, 5)
    );
    expect(segments).toEqual([
      { type: 'text', text: 'Hi ' },
      {
        type: 'mention',
        text: 'Walter White',
        key: '3',
        id: 'walter',
        display: 'Walter White',
        trigger: '@',
        plainStart: 3,
        plainEnd: 15,
        className: 'mention',
        style: { color: 'red' },
        selectionState: 'inside',
      },
      { type: 'text', text: ' and ' },
      expect.objectContaining({ type: 'mention', text: 'Jesse', plainStart: 20, plainEnd: 25 }),
    ]);
  });
});
