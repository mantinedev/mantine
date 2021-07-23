import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsStyle, itSupportsClassName, itSupportsOthers } from '@mantine/tests';
import { highlighter, Highlight } from './Highlight';

describe('@mantine/core/Highlight', () => {
  itSupportsStyle(Highlight, { children: 'Hello', highlight: 'He' });
  itSupportsClassName(Highlight, { children: 'Hello', highlight: 'He' });
  itSupportsOthers(Highlight, { children: 'Hello', highlight: 'He' });

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
    expect(highlighter(VALUE, 'Hell', false)).toEqual([
      { chunk: 'Hell', highlighted: true },
      { chunk: 'o, World', highlighted: false },
    ]);
  });

  it('Highlights middle of string', () => {
    expect(highlighter(VALUE, 'llo, W', false)).toEqual([
      { chunk: 'He', highlighted: false },
      { chunk: 'llo, W', highlighted: true },
      { chunk: 'orld', highlighted: false },
    ]);
  });

  it('Highlights multiple of string', () => {
    expect(highlighter(VALUE, ['Hell', 'world'], false)).toEqual([
      { chunk: 'Hell', highlighted: true },
      { chunk: 'o, ', highlighted: false },
      { chunk: 'World', highlighted: true },
    ]);
  });

  it('returns initial string if highlight is empty', () => {
    expect(highlighter(VALUE, '', false)).toEqual([{ chunk: VALUE, highlighted: false }]);
    expect(highlighter(VALUE, [], false)).toEqual([{ chunk: VALUE, highlighted: false }]);
    expect(highlighter(VALUE, ['', ''], false)).toEqual([{ chunk: VALUE, highlighted: false }]);
  });

  it('highlights uppercased value', () => {
    expect(highlighter(VALUE, 'HELL', false)).toEqual([
      { chunk: 'Hell', highlighted: true },
      { chunk: 'o, World', highlighted: false },
    ]);
    expect(highlighter(VALUE, 'Hello,', false)).toEqual([
      { chunk: 'Hello,', highlighted: true },
      { chunk: ' World', highlighted: false },
    ]);
  });

  it('highlights value with whitespace', () => {
    expect(highlighter(VALUE, 'Hello  \t', false)).toEqual([
      { chunk: 'Hello', highlighted: true },
      { chunk: ', World', highlighted: false },
    ]);
  });

  it('does not highlight if nothing found', () => {
    expect(highlighter(VALUE, 'Hi, there', false)).toEqual([{ chunk: VALUE, highlighted: false }]);
  });

  it('should only highlight exact matches', () => {
    const EXACT_VALUE = 'Highlighting is the light of my days without lights';
    expect(highlighter(EXACT_VALUE, 'light', true)).toEqual([
      { chunk: 'Highlighting is the ', highlighted: false },
      { chunk: 'light', highlighted: true },
      { chunk: ' of my days without lights', highlighted: false },
    ]);
    expect(highlighter(EXACT_VALUE, 'light', false)).toStrictEqual([
      { chunk: 'High', highlighted: false },
      { chunk: 'light', highlighted: true },
      { chunk: 'ing is the ', highlighted: false },
      { chunk: 'light', highlighted: true },
      { chunk: ' of my days without ', highlighted: false },
      { chunk: 'light', highlighted: true },
      { chunk: 's', highlighted: false },
    ]);
  });
});
