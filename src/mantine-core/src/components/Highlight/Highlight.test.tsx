import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsMargins,
} from '@mantine/tests';
import { highlighter, Highlight } from './Highlight';

const defaultProps = { children: 'Hello', highlight: 'He' };

describe('@mantine/core/Highlight', () => {
  itSupportsStyle(Highlight, defaultProps);
  itSupportsClassName(Highlight, defaultProps);
  itSupportsOthers(Highlight, defaultProps);
  itSupportsMargins(Highlight, defaultProps);

  it('has correct displayName', () => {
    expect(Highlight.displayName).toEqual('@mantine/core/Highlight');
  });

  it('highlights correct value', () => {
    const element = shallow(<Highlight highlight="he">Hello</Highlight>);
    expect(element.render().find('mark').text()).toBe('He');
  });

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;

    const withTag = shallow(
      <Highlight<'a'> component="a" href="https://mantine.dev" highlight="Ma">
        Mantine
      </Highlight>
    );

    const withComponent = shallow(
      <Highlight<typeof TestComponent> component={TestComponent} highlight="Ma">
        Mantine
      </Highlight>
    );

    expect(withTag.dive().type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.dive().type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });
});

describe('@mantine/core/Highlight/highlighter', () => {
  const VALUE = 'Hello, World';

  it('highlights start of string', () => {
    expect(highlighter(VALUE, 'Hell')).toEqual([
      { chunk: 'Hell', highlighted: true },
      { chunk: 'o, World', highlighted: false },
    ]);
  });

  it('Highlights middle of string', () => {
    expect(highlighter(VALUE, 'llo, W')).toEqual([
      { chunk: 'He', highlighted: false },
      { chunk: 'llo, W', highlighted: true },
      { chunk: 'orld', highlighted: false },
    ]);
  });

  it('Highlights multiple of string', () => {
    expect(highlighter(VALUE, ['Hell', 'world'])).toEqual([
      { chunk: 'Hell', highlighted: true },
      { chunk: 'o, ', highlighted: false },
      { chunk: 'World', highlighted: true },
    ]);
  });

  it('returns initial string if highlight is empty', () => {
    expect(highlighter(VALUE, '')).toEqual([{ chunk: VALUE, highlighted: false }]);
    expect(highlighter(VALUE, [])).toEqual([{ chunk: VALUE, highlighted: false }]);
    expect(highlighter(VALUE, ['', ''])).toEqual([{ chunk: VALUE, highlighted: false }]);
  });

  it('highlights uppercased value', () => {
    expect(highlighter(VALUE, 'HELL')).toEqual([
      { chunk: 'Hell', highlighted: true },
      { chunk: 'o, World', highlighted: false },
    ]);
    expect(highlighter(VALUE, 'Hello,')).toEqual([
      { chunk: 'Hello,', highlighted: true },
      { chunk: ' World', highlighted: false },
    ]);
  });

  it('highlights value with whitespace', () => {
    expect(highlighter(VALUE, 'Hello  \t')).toEqual([
      { chunk: 'Hello', highlighted: true },
      { chunk: ', World', highlighted: false },
    ]);
  });

  it('does not highlight if nothing found', () => {
    expect(highlighter(VALUE, 'Hi, there')).toEqual([{ chunk: VALUE, highlighted: false }]);
  });
});
