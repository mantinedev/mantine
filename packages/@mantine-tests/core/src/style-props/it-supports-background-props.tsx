import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

export function itSupportsBackgroundProps<Props>(
  options: Options<Props>,
  name = 'supports bd, bgsz, bgp, bgr and bga props'
) {
  const selector = options.selector || '*:not(style)';

  it(name, () => {
    const { container: bgsz } = render(<options.component {...options.props} bgsz={32} />);
    const { container: bgp } = render(<options.component {...options.props} bgp="center" />);
    const { container: bgr } = render(<options.component {...options.props} bgr="repeat" />);
    const { container: bga } = render(<options.component {...options.props} bga="fixed" />);
    const { container: bd } = render(<options.component {...options.props} bd="1rem solid red" />);

    expect(bgsz.querySelector(selector)).toHaveStyle({
      backgroundSize: 'calc(2rem * var(--mantine-scale))',
    });
    expect(bgp.querySelector(selector)).toHaveStyle({ backgroundPosition: 'center' });
    expect(bgr.querySelector(selector)).toHaveStyle({ backgroundRepeat: 'repeat' });
    expect(bga.querySelector(selector)).toHaveStyle({ backgroundAttachment: 'fixed' });
    expect(bd.querySelector(selector)).toHaveStyle({
      border: 'calc(1rem * var(--mantine-scale)) solid var(--mantine-color-red-filled)',
    });
  });
}
