import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

export function itSupportsSize<Props>(options: Options<Props>, name = 'supports size') {
  it(name, () => {
    const { container, rerender } = render(
      <options.component {...options.props} size="__test-size" />
    );
    expect(container.querySelector(options.selector || '*:not(style)')!).toHaveAttribute(
      'data-size',
      '__test-size'
    );

    rerender(<options.component {...options.props} size="5rem" />);
    expect(container.querySelector(options.selector || '*:not(style)')!).not.toHaveAttribute(
      'data-size'
    );
  });
}
