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

    styles.forEach((part) => {
      classNames[part] = `test-${part}`;
    });

    const element = shallow(<Component {...requiredProps} classNames={classNames} />).render();

    styles.forEach((part) => {
      const node = part === 'root' ? element : element.find(`.mantine-${name}-${part}`);
      expect([node.attr('class'), `test-${part}`]).not.toEqual([undefined, `test-${part}`]);
      expect(node.attr('class')).toContain(`test-${part}`);
    });
  });
}
