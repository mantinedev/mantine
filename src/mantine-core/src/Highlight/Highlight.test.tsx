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
    expect(highlighter(VALUE, 'Hell')).toEqual({ start: '', highlighted: 'Hell', end: 'o, World' });
  });

  it('Highlights middle of string', () => {
    expect(highlighter(VALUE, 'llo, W')).toEqual({
      start: 'He',
      highlighted: 'llo, W',
      end: 'orld',
    });
  });

  it('highlights uppercased value', () => {
    expect(highlighter(VALUE, 'HELL')).toEqual({ start: '', highlighted: 'Hell', end: 'o, World' });
    expect(highlighter(VALUE, 'Hello,')).toEqual({
      start: '',
      highlighted: 'Hello,',
      end: ' World',
    });
  });

  it('highlights value with whitespace', () => {
    expect(highlighter(VALUE, 'Hello  \t')).toEqual({
      start: '',
      highlighted: 'Hello',
      end: ', World',
    });
  });

  it('does not highlight if nothing found', () => {
    expect(highlighter(VALUE, 'Hi, there')).toEqual({ start: VALUE, highlighted: '', end: '' });
  });
});
