import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
}

export function itSupportsInputContainer<Props>(
  options: Options<Props>,
  name = 'supports inputContainer props'
) {
  it(name, () => {
    const { container } = render(
      <options.component
        {...options.props}
        inputContainer={(children: React.ReactNode) => (
          <div className="test-input-container">{children}</div>
        )}
      />
    );
    expect(container.querySelector('.test-input-container')).toBeInTheDocument();
    expect(
      container.querySelector('.test-input-container .mantine-Input-input')
    ).toBeInTheDocument();
  });
}
