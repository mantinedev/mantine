import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

export function itSupportsColorsProps<Props>(
  options: Options<Props>,
  name = 'supports c, bg and opacity props'
) {
  const selector = options.selector || '*:not(style)';

  it(name, () => {
    const { container: c } = render(<options.component {...options.props} c="#FEFEFE" />);
    const { container: bg } = render(<options.component {...options.props} bg="#DCDCDC" />);
    const { container: opacity } = render(<options.component {...options.props} opacity={0.85} />);

    expect(c.querySelector(selector)).toHaveStyle({ color: '#FEFEFE' });
    expect(bg.querySelector(selector)).toHaveStyle({ background: '#DCDCDC' });
    expect(opacity.querySelector(selector)).toHaveStyle({ opacity: '0.85' });
  });
}
