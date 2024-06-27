import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
}

export function itSupportsLightDarkHidden<Props>(
  options: Options<Props>,
  name = 'supports lightHidden and darkHidden props'
) {
  it(`${name}: lightHidden`, () => {
    const { container } = render(<options.component {...options.props} lightHidden />);
    expect(container.querySelector('.mantine-light-hidden')).not.toBe(null);
  });

  it(`${name}: darkHidden`, () => {
    const { container } = render(<options.component {...options.props} darkHidden />);
    expect(container.querySelector('.mantine-dark-hidden')).not.toBe(null);
  });
}
