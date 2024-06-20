import { fireEvent } from '@testing-library/react';
import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

export function itSupportsFocusEvents<Props>(
  options: Options<Props>,
  name = 'supports focus events'
) {
  it(name, () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    const { container } = render(
      <options.component {...options.props} onFocus={onFocus} onBlur={onBlur} />
    );

    fireEvent.focus(container.querySelector(options.selector || '*:not(style)')!);
    expect(onFocus).toHaveBeenCalled();

    fireEvent.blur(container.querySelector(options.selector || '*:not(style)')!);
    expect(onBlur).toHaveBeenCalled();
  });
}
