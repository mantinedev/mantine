import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
}

export function itSupportsId<Props>(options: Options<Props>, name = 'supports id') {
  it(name, () => {
    render(<options.component {...options.props} id="test-mantine-id" />);
    expect(document.querySelector('#test-mantine-id')).not.toBe(null);
  });
}
