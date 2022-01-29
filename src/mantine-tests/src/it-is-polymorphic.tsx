import React from 'react';
import { render } from '@testing-library/react';

export function itIsPolymorphic(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  selector?: string
) {
  it('is polymorphic', () => {
    const getTarget = (container: HTMLElement): HTMLElement =>
      selector ? container.querySelector(selector) : (container.firstChild as HTMLElement);
    const TestComponent = (props: any) => <mark data-test-prop {...props} />;
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
