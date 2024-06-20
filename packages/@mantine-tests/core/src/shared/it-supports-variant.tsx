import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

export function itSupportsVariant<Props>(options: Options<Props>, name = 'supports variant') {
  it(name, () => {
    const { container } = render(<options.component {...options.props} variant="__test-variant" />);
    expect(container.querySelector(options.selector || '*:not(style)')!).toHaveAttribute(
      'data-variant',
      '__test-variant'
    );
  });
}
