import React from 'react';
import { shallow } from 'enzyme';

export function itSupportsStylesApi(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  styles: string[],
  name: string,
  variant?: string
) {
  it(`uses styles api${variant ? `: ${variant}` : ''}`, () => {
    const classNames = {};
    const _styles = {};

    styles.forEach((part) => {
      classNames[part] = `test-${part}`;
      _styles[part] = { clear: 'both', textOrientation: 'upright' };
    });

    const element = shallow(
      <Component {...requiredProps} styles={_styles} classNames={classNames} />
    ).render();

    styles.forEach((part) => {
      const node = part === 'root' ? element : element.find(`.mantine-${name}-${part}`);
      expect(node.attr('class')).toContain(`test-${part}`);
      expect(node.css('clear')).toBe('both');
      expect(node.css('text-orientation')).toBe('upright');
    });
  });
}
