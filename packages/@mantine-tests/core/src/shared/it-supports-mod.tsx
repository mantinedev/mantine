import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

export function itSupportsMod<Props>(options: Options<Props>, name = 'supports mod') {
  it(`${name}: string`, () => {
    const { container } = render(<options.component {...options.props} mod="test" />);
    expect(container.querySelector(options.selector || '*:not(style)')!).toHaveAttribute(
      'data-test'
    );
  });

  it(`${name}: object`, () => {
    const { container } = render(
      <options.component {...options.props} mod={{ test: true, test2: false }} />
    );

    expect(container.querySelector(options.selector || '*:not(style)')!).toHaveAttribute(
      'data-test'
    );

    expect(container.querySelector(options.selector || '*:not(style)')!).not.toHaveAttribute(
      'data-test2'
    );
  });

  it(`${name}: array`, () => {
    const { container } = render(<options.component {...options.props} mod={['test', 'test2']} />);

    expect(container.querySelector(options.selector || '*:not(style)')!).toHaveAttribute(
      'data-test'
    );

    expect(container.querySelector(options.selector || '*:not(style)')!).toHaveAttribute(
      'data-test2'
    );
  });

  it(`${name}: array with object`, () => {
    const { container } = render(
      <options.component {...options.props} mod={['test', { test2: true }]} />
    );

    expect(container.querySelector(options.selector || '*:not(style)')!).toHaveAttribute(
      'data-test'
    );

    expect(container.querySelector(options.selector || '*:not(style)')!).toHaveAttribute(
      'data-test2'
    );
  });
}
