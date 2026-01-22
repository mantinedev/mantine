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
    displayName: '@mantine/core/Highlight',
    stylesApiSelectors: ['root'],
  });

  it('highlights correct value', () => {
    const { container } = render(<Highlight highlight="he">Hello</Highlight>);
    expect(container.querySelector('mark')!.textContent).toBe('He');
  });

  describe('per-term colors', () => {
    it('applies custom color to individual terms', () => {
      const { container } = render(
        <Highlight
          highlight={[
            { text: 'error', color: 'red' },
            { text: 'warning', color: 'yellow' },
          ]}
        >
          error and warning messages
        </Highlight>
      );

      const marks = container.querySelectorAll('mark');
      expect(marks).toHaveLength(2);
      expect(marks[0].textContent).toBe('error');
      expect(marks[1].textContent).toBe('warning');
    });

    it('highlights multiple terms with custom colors', () => {
      const { container } = render(
        <Highlight
          highlight={[
            { text: 'foo', color: 'red' },
            { text: 'bar', color: 'blue' },
          ]}
        >
          foo and bar
        </Highlight>
      );

      const marks = container.querySelectorAll('mark');
      expect(marks).toHaveLength(2);
      expect(marks[0].textContent).toBe('foo');
      expect(marks[1].textContent).toBe('bar');
    });

    it('handles terms without custom color using default', () => {
      const { container } = render(
        <Highlight highlight={[{ text: 'test' }]} color="blue">
          This is a test
        </Highlight>
      );

      const mark = container.querySelector('mark');
      expect(mark).toBeInTheDocument();
      expect(mark?.textContent).toBe('test');
    });

    it('handles case-insensitive color matching', () => {
      const { container } = render(
        <Highlight highlight={[{ text: 'hello', color: 'red' }]}>Hello HELLO hello</Highlight>
      );

      const marks = container.querySelectorAll('mark');
      expect(marks).toHaveLength(3);
      expect(marks[0].textContent).toBe('Hello');
      expect(marks[1].textContent).toBe('HELLO');
      expect(marks[2].textContent).toBe('hello');
    });

    it('mixes terms with and without colors', () => {
      const { container } = render(
        <Highlight highlight={[{ text: 'red', color: 'red' }, { text: 'default' }]} color="yellow">
          red and default colors
        </Highlight>
      );

      const marks = container.querySelectorAll('mark');
      expect(marks).toHaveLength(2);
      expect(marks[0].textContent).toBe('red');
      expect(marks[1].textContent).toBe('default');
    });
  });

  describe('wholeWord option', () => {
    it('matches only whole words when wholeWord is true', () => {
      const { container } = render(
        <Highlight highlight="the" wholeWord>
          the theme is there
        </Highlight>
      );

      const marks = container.querySelectorAll('mark');
      expect(marks).toHaveLength(1);
      expect(marks[0].textContent).toBe('the');
    });

    it('matches partial words when wholeWord is false', () => {
      const { container } = render(
        <Highlight highlight="the" wholeWord={false}>
          the theme is there
        </Highlight>
      );

      const marks = container.querySelectorAll('mark');
      expect(marks).toHaveLength(3);
    });

    it('works with multiple terms', () => {
      const { container } = render(
        <Highlight highlight={['test', 'testing']} wholeWord>
          test testing tested
        </Highlight>
      );

      const marks = container.querySelectorAll('mark');
      expect(marks).toHaveLength(2);
      expect(marks[0].textContent).toBe('test');
      expect(marks[1].textContent).toBe('testing');
    });
  });

  it('adds data-highlight attribute to mark elements', () => {
    const { container } = render(<Highlight highlight="test">This is a test</Highlight>);
    const mark = container.querySelector('mark');
    expect(mark).toHaveAttribute('data-highlight', 'test');
  });

  it('applies highlightStyles to mark elements', () => {
    const { container } = render(
      <Highlight highlight="test" highlightStyles={{ fontWeight: 700 }}>
        This is a test
      </Highlight>
    );
    const mark = container.querySelector('mark');
    expect(mark).toHaveStyle({ fontWeight: 700 });
  });
});
