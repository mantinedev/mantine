import React, { forwardRef } from 'react';
import { render } from '@testing-library/react';

export function itIsPolymorphic<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  selector?: string
) {
  it('is polymorphic', () => {
    const getTarget = (container: HTMLElement): HTMLElement =>
      selector ? container.querySelector(selector) : (container.firstChild as HTMLElement);
    const TestComponent = forwardRef((props: any, ref) => (
      <mark data-test-prop ref={ref} {...props} />
    ));
    const { container: withTag } = render(
      <Component component="a" href="https://mantine.dev" {...requiredProps} />
    );
    const { container: withComponent } = render(
      <Component component={TestComponent} {...requiredProps} />
    );

    expect(getTarget(withTag).tagName).toBe('A');
    expect(getTarget(withComponent).tagName).toBe('MARK');
  });
}
