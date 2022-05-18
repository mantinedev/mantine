import React from 'react';
import { findChildByType } from './find-child-by-type';

const TestComponent = () => <div>Test</div>;

describe('@mantine/core/utils/find-child-by-type', () => {
  it('finds child with a given type', () => {
    const result = findChildByType(
      [
        <div key="0" />,
        <TestComponent key="1" />,
        <div key="2" />,
        <div key="3" />,
        <div key="4" />,
      ],
      TestComponent
    );

    expect(result.type).toBe(TestComponent);
  });
});
