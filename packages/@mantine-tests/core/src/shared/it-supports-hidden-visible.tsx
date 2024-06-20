import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
}

export function itSupportsHiddenVisible<Props>(
  options: Options<Props>,
  name = 'supports hiddenFrom and visibleFrom props'
) {
  it(`${name}: hiddenFrom`, () => {
    const { container } = render(<options.component {...options.props} hiddenFrom="lg" />);
    expect(container.querySelector('.mantine-hidden-from-lg')).not.toBe(null);
  });

  it(`${name}: visibleFrom`, () => {
    const { container } = render(<options.component {...options.props} visibleFrom="sm" />);
    expect(container.querySelector('.mantine-visible-from-sm')).not.toBe(null);
  });
}
