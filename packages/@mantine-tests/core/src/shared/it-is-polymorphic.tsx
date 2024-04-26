import { forwardRef } from 'react';
import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

const TestComponent = forwardRef<HTMLElement, React.ComponentPropsWithoutRef<'mark'>>(
  (props, ref) => <mark ref={ref} data-child-prop {...props} />
);

export function itIsPolymorphic<Props>(options: Options<Props>, name = 'is polymorphic') {
  const getTarget = (container: HTMLElement): HTMLElement =>
    container.querySelector(options.selector || '*:not(style)')!;

  it(`${name}: html element`, () => {
    const { container } = render(
      <options.component component="a" href="#test-link" {...options.props} />
    );

    const target = getTarget(container);
    expect(target.tagName).toBe('A');
    expect(target.getAttribute('href')).toBe('#test-link');
  });

  it(`${name}: React component`, () => {
    const { container } = render(
      <options.component component={TestComponent} data-parent-prop {...options.props} />
    );

    const target = getTarget(container);
    expect(target.tagName).toBe('MARK');
    expect(target).toHaveAttribute('data-child-prop');
    expect(target).toHaveAttribute('data-parent-prop');
  });

  it(`${name}: renderRoot`, () => {
    const { container } = render(
      <options.component
        renderRoot={(props: any) => <a href="#test-link" {...props} />}
        {...options.props}
      />
    );

    const target = getTarget(container);
    expect(target.tagName).toBe('A');
    expect(target.getAttribute('href')).toBe('#test-link');
  });
}
