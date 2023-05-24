import { render } from '@testing-library/react';
import React from 'react';

export function itDisablesInputInsideDisabledFieldset<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  componentName?: string
) {
  it('disables inside disabled fieldset', () => {
    const { container } = render(
      <fieldset disabled>
        <Component {...requiredProps} />
      </fieldset>
    );

    const target = componentName
      ? container.querySelector(`.mantine-${componentName}-input`)
      : container.querySelector('input');
    expect(target).toBeDisabled();
  });
}
