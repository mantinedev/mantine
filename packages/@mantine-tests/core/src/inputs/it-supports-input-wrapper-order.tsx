import { inputWrapperQueries } from '../queries';
import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
}

export function itSupportsInputWrapperOrder<Props>(
  options: Options<Props>,
  name = 'supports inputWrapperOrder prop'
) {
  it(name, () => {
    const { container, rerender } = render(
      <options.component {...options.props} inputWrapperOrder={['error', 'label']} />
    );
    expect(inputWrapperQueries.getError(container).nextElementSibling).toBe(
      inputWrapperQueries.getLabel(container)
    );

    rerender(<options.component {...options.props} inputWrapperOrder={['label', 'error']} />);
    expect(inputWrapperQueries.getLabel(container).nextElementSibling).toBe(
      inputWrapperQueries.getError(container)
    );
  });
}
