import { render, tests } from '@mantine-tests/core';
import { TextStylesNames } from '../Text';
import { Highlight, HighlightProps } from './Highlight';

const defaultProps: HighlightProps = {
  children: 'test',
  highlight: 't',
};

describe('@mantine/core/Highlight', () => {
  tests.itSupportsSystemProps<HighlightProps, TextStylesNames>({
    component: Highlight,
    props: defaultProps,
    polymorphic: true,
    id: true,
    displayName: '@mantine/core/Highlight',
    stylesApiSelectors: ['root'],
  });

  it('highlights correct value', () => {
    const { container } = render(<Highlight highlight="he">Hello</Highlight>);
    expect(container.querySelector('mark')!.textContent).toBe('He');
  });
});
