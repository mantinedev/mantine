import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
}

export function itSupportsInputAsterisk<Props>(
  options: Options<Props>,
  name = 'supports combination of withAsterisk and required props'
) {
  it(name, () => {
    const { rerender, container } = render(
      <options.component {...options.props} required={false} withAsterisk={false} />
    );

    expect(container.querySelector('.mantine-InputWrapper-required')).not.toBeInTheDocument();

    rerender(<options.component {...options.props} required withAsterisk={false} />);
    expect(container.querySelector('.mantine-InputWrapper-required')).not.toBeInTheDocument();

    rerender(<options.component {...options.props} required={false} withAsterisk />);
    expect(container.querySelector('.mantine-InputWrapper-required')).toBeInTheDocument();

    rerender(<options.component {...options.props} required withAsterisk />);
    expect(container.querySelector('.mantine-InputWrapper-required')).toBeInTheDocument();
  });
}
