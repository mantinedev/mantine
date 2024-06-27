import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
}

export function itSupportsClassName<Props>(
  options: Options<Props>,
  name = 'supports className prop'
) {
  it(name, () => {
    const { container } = render(
      <options.component {...options.props} className="test-class-name" />
    );

    expect(container.querySelector('.test-class-name')).toBeInTheDocument();
  });
}
