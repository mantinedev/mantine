import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

export function itSupportsPositionProps<Props>(
  options: Options<Props>,
  name = 'supports pos, top, left, bottom, right, inset and display props'
) {
  const selector = options.selector || '*:not(style)';

  it(name, () => {
    const { container: pos } = render(<options.component {...options.props} pos="absolute" />);
    const { container: top } = render(<options.component {...options.props} top="1rem" />);
    const { container: left } = render(<options.component {...options.props} left="2rem" />);
    const { container: bottom } = render(<options.component {...options.props} bottom="3rem" />);
    const { container: right } = render(<options.component {...options.props} right="4rem" />);
    const { container: inset } = render(<options.component {...options.props} inset="5rem" />);
    const { container: display } = render(<options.component {...options.props} display="flex" />);
    const { container: flex } = render(<options.component {...options.props} flex="0 0 1" />);

    expect(pos.querySelector(selector)).toHaveStyle({ position: 'absolute' });
    expect(top.querySelector(selector)).toHaveStyle({ top: '1rem' });
    expect(left.querySelector(selector)).toHaveStyle({ left: '2rem' });
    expect(bottom.querySelector(selector)).toHaveStyle({ bottom: '3rem' });
    expect(right.querySelector(selector)).toHaveStyle({ right: '4rem' });
    expect(inset.querySelector(selector)).toHaveStyle({ inset: '5rem' });
    expect(display.querySelector(selector)).toHaveStyle({ display: 'flex' });
    expect(flex.querySelector(selector)).toHaveStyle({ flex: '0 0 1' });
  });
}
