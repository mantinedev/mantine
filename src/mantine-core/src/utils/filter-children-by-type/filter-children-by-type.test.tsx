import React from 'react';
import { filterChildrenByType } from './filter-children-by-type';

const TestComponent = () => <div>test</div>;
const TestComponent2 = () => <div>test</div>;

describe('@mantine/core/utils/filter-children-by-type', () => {
  it('filters nodes by given type', () => {
    const result = filterChildrenByType(
      [
        <div key="0" />,
        <TestComponent key="1" />,
        <TestComponent key="2" />,
        <div key="3" />,
        <TestComponent key="4" />,
      ],
      TestComponent
    );

    expect(result).toHaveLength(3);
    expect(result.every((item) => item.type === TestComponent)).toBe(true);
  });

  it('filters nodes by given types array', () => {
    const result = filterChildrenByType(
      [
        <div key="0" />,
        <TestComponent2 key="1" />,
        <TestComponent key="2" />,
        <div key="3" />,
        <TestComponent2 key="4" />,
      ],
      [TestComponent, TestComponent2]
    );

    expect(result).toHaveLength(3);
    expect(
      result.every((item) => item.type === TestComponent || item.type === TestComponent2)
    ).toBe(true);
  });
});
