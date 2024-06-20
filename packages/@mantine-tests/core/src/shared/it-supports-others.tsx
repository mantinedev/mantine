import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

export function itSupportsOthers<Props>(
  options: Options<Props>,
  name = 'supports ...others props'
) {
  it(name, () => {
    const { container } = render(<options.component {...options.props} data-test-attribute />);
    expect(container.querySelector('[data-test-attribute]')).toBeInTheDocument();
  });
}
