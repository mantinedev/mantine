import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { Col, ColProps, isValidSpan } from './Col';

const defaultProps: ColProps = {
  span: 1,
  columns: 12,
  offset: 0,
  gutter: 20,
  grow: false,
};

describe('@mantine/core/Col', () => {
  itRendersChildren(Col, defaultProps);
  itSupportsSystemProps({ component: Col, props: defaultProps, displayName: '@mantine/core/Col' });

  it('correctly detects invalid spans', () => {
    expect(isValidSpan(2)).toBe(true);
    expect(isValidSpan(1.2)).toBe(false);
    expect(isValidSpan(-1.2)).toBe(false);
    expect(isValidSpan(-4)).toBe(false);
    expect(isValidSpan(0)).toBe(false);
  });
});
