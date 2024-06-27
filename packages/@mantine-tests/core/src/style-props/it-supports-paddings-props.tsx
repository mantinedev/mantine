import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

export function itSupportsPaddingsProps<Props>(
  options: Options<Props>,
  name = 'supports p, px, py, pt, pb, pr and pl props'
) {
  const selector = options.selector || '*:not(style)';

  it(name, () => {
    const { container: p } = render(<options.component {...options.props} p="10%" />);
    const { container: px } = render(<options.component {...options.props} px="20%" />);
    const { container: py } = render(<options.component {...options.props} py="30%" />);
    const { container: pt } = render(<options.component {...options.props} pt="40%" />);
    const { container: pb } = render(<options.component {...options.props} pb="50%" />);
    const { container: pr } = render(<options.component {...options.props} pr="60%" />);
    const { container: pl } = render(<options.component {...options.props} pl="70%" />);
    const { container: pe } = render(<options.component {...options.props} pe="80%" />);
    const { container: ps } = render(<options.component {...options.props} ps="90%" />);

    expect(p.querySelector(selector)).toHaveStyle({ padding: '10%' });
    expect(px.querySelector(selector)).toHaveStyle({ paddingInline: '20%' });
    expect(py.querySelector(selector)).toHaveStyle({ paddingBlock: '30%' });
    expect(pt.querySelector(selector)).toHaveStyle({ paddingTop: '40%' });
    expect(pb.querySelector(selector)).toHaveStyle({ paddingBottom: '50%' });
    expect(pr.querySelector(selector)).toHaveStyle({ paddingRight: '60%' });
    expect(pl.querySelector(selector)).toHaveStyle({ paddingLeft: '70%' });
    expect(pe.querySelector(selector)).toHaveStyle({ paddingInlineEnd: '80%' });
    expect(ps.querySelector(selector)).toHaveStyle({ paddingInlineStart: '90%' });
  });
}
