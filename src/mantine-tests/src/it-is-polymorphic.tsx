import React from 'react';
import { render } from '@testing-library/react';

export function itIsPolymorphic(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <mark data-test-prop {...props} />;
    const { container: withTag } = render(
      <Component component="a" href="https://mantine.dev" {...requiredProps} />
    );
    const { container: withComponent } = render(
      <Component component={TestComponent} {...requiredProps} />
    );
    expect((withTag.firstChild as HTMLElement).tagName).toBe('A');
    expect((withComponent.firstChild as HTMLElement).tagName).toBe('MARK');
  });
}
